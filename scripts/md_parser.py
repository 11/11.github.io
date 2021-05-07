from pathlib import Path
from argparse import ArgumentParser
from collections import namedtuple

import re
import pdb
import json
import pprint


class BlockType:
    # headers
    h1 = 1
    h2 = 2
    h3 = 3
    h4 = 4
    h5 = 5
    h6 = 6

    # paragraph
    p = 7

    # STYLES
    # **bold**
    bold = 8
    # __underline__
    underline = 9
    # ##italic##
    italic = 10
    # ~~strikethrough~~
    strikethrough = 11
    # `code inline`
    code_inline = 12

    # > blockquote \n|EOF
    blockquote = 13

    # [some website](https://www.somewebsite.com)
    links = 14

    # lists
    unordered_list = 15
    ordered_list = 16
    list_item = 17

    # media
    image = 18
    video = 19

    # code
    code_block = 20

    text = 21


class MarkdownParser:
    """ An
    """

    def __init__(self):
        self._file = None
        self._buffer = None
        self._cursor = 0

    def pre_parsing(self, pre_parser):
        return pre_parser()

    def post_parsing(self, post_parser):
        return post_parser()

    def parse(self, file: str, seek_to=0) -> tuple:
        """ Kicks off the process of parsing a MarkDown file to JSON

        Opens a file buffer to a MarkDown file, and starts trying to parse it into MarkDown.

        Args:
            file: The filename passed from the command line
            seek_to: The number of bytes to seek to when starting to parse the MarkDown.
                Defaults to the 0th byte of a file

        Returns:
            The MarkDown as a JSON

        Raises
            FileNotFoundError: An error occured when trying to open markdown file
            OSError: An error occured while trying to open file
        """
        self._cursor = seek_to
        try:
            self._file = Path(file)
            if not self._file.is_file():
                raise FileNotFoundError

            self._buffer = open(file=self._file.absolute())

            md_dict = self._parse_markdown()

            self._buffer.close()

            return json.dumps(md_dict)
        except FileNotFoundError as err:
            print('Error - file doesn\'t exist: ', err)
        except OSError as err:
            print('Error while reading file: ', err)

    def _look_ahead(self, no_bytes: int) -> str:
        with open(self._file.absolute(), 'r') as md_file:
            md_file.seek(self._cursor + no_bytes)
            look_ahead = md_file.read(no_bytes)
            return str(look_ahead)

    def _parse_markdown(self):
            blog = self._buffer
            # TODO: seek to beginning of blog content
            # blog.seek()

            result = []
            block = []
            while(char := blog.read(1)):
                # TODO: figure out if we care about newlines
                if char == '\n' and len(block) <= 1:
                    self._cursor += 1
                    continue

                block.append(char)

                if char == '\n':
                    block_str = ''.join(block)

                    if block_str.startswith('#'):
                        header_block = self._parse_header(block_str)
                        # print('Header Block: ', header_block)
                        result.append(header_block)
                    elif block_str.startswith('- '):
                        unordered_list = self._parse_unordered_list(block)
                        # print('UnorderedList Block: ', unordered_list)
                        result.append(unordered_list)
                        blog.seek(self._cursor)
                    elif block_str.startswith('1. '):
                        ordered_list = self._parse_ordered_list(block)
                        result.append(ordered_list)
                        # print('OrderedList Block: ', ordered_list)
                        blog.seek(self._cursor)
                    elif block_str.startswith('```'):
                        code_block = self._parse_code(block)
                        result.append(code_block)
                        # print('Code Block: ', code_block)
                        blog.seek(self._cursor)
                    elif block_str.startswith('> '):
                        blockquote_block = self._parse_blockquote(block)
                        result.append(blockquote_block)
                        # print('Blockquote Block: ', blockquote_block)
                        blog.seeK(self._cursor)
                    elif block_str.startswith('![') and block_str.endswith(')'):
                        block_type, block_content = self._parse_media()
                        blog.seek(self._cursor)
                    elif block_str.strip('\n \t') != '':
                        paragraph_block = self._parse_paragraph(block)
                        result.append(paragraph_block)
                        # print('Paragraph Block: ', paragraph_block)
                        blog.seek(self._cursor)

                    # reset block back to an empty list
                    block = []

                self._cursor += 1

            return { 'markdown': result }

    def _parse_header(self, header: str) -> dict:
        group = re.split('(#{1,6} )', header)
        group = list(filter(lambda s: s != '', group))

        header_type = len(group[0].strip())
        header_title = group[1].strip()
        if not (header_type or header_title):
            raise RuntimeError('')

        if header_type == BlockType.h1:
            return {
                'element_type':  BlockType.h1,
                'children': header_title,
            }
        elif header_type == BlockType.h2:
            return {
                'element_type': BlockType.h2,
                'children': header_title,
            }
        elif header_type == BlockType.h3:
            return {
                'element_type': BlockType.h3,
                'children': header_title,
            }
        elif header_type == BlockType.h4:
            return {
                'element_type': BlockType.h4,
                'children': header_title,
            }
        elif header_type == BlockType.h5:
            return {
                'element_type': BlockType.h5,
                'chidren': header_title,
            }
        elif header_type == BlockType.h6:
            return {
                'element_type': BlockType.h6,
                'children': header_title,
            }
        else:
            raise RuntimeError('Error - header type not supported')

    def _parse_unordered_list(self, block: list[str]) -> dict:
        self._cursor += 1
        blog = self._buffer
        blog.seek(self._cursor)

        end_of_list_pattern = re.compile(r'\n(?!-)')
        while(char := blog.read(1)):
            block.append(char)

            end_of_block = ''.join(block[-2:])
            if len(block) >= 2 and end_of_list_pattern.match(end_of_block):
                break
            else:
                self._cursor += 1

        list_items  = ''.join(block[:len(block) - 1]).splitlines()
        list_items = [self._parse_text(li) for li in list_items]
        return {
            'element_type': BlockType.unordered_list,
            'children': [{
                'element_type': BlockType.list_item,
                'children': li
            } for li in list_items],
        }

    def _parse_ordered_list(self, block: list[str]) -> dict:
        blog = self._buffer
        blog.seek(self._cursor)

        while (char := blog.read(1)):
            block.append(char)

            if len(block) >= 2 and char == '\n':
                look_ahead = self._look_ahead(3)
                if look_ahead:
                    number = look_ahead[0]
                    period = look_ahead[1]
                    space = look_ahead[2]
                    if not (number.isnumeric() and not period == '.' and not space == ' '):
                        break

            self._cursor += 1

        list_items = ''.join(block).splitlines()
        return {
            'element_type': BlockType.ordered_list,
            'children': [{
                'element_type': BlockType.list_item,
                'content': li,
            } for li in list_items],
        }

    def _parse_code(self, block: list[str]) -> dict:
        if not block:
            raise RuntimeError('ERROR: No codeblock found')
        blog = self._buffer
        blog.seek(self._cursor)

        end_of_code_block_pattern = re.compile(r'```\n')
        while(char := blog.read(1)):
            block.append(char)

            end_of_block = ''.join(block[-4:])
            if len(block) >= 4 and end_of_code_block_pattern.match(end_of_block):
                break
            else:
                self._cursor += 1

        code_block = ''.join(block).strip()
        return {
            'element_type': BlockType.code_block,
            'children': code_block
        }

    def _parse_paragraph(self, block: list[str]) -> dict:
        if not block:
            raise RuntimeError('')

        md_file = self._buffer
        md_file.seek(self._cursor)

        while(char := md_file.read(1)):
            block.append(char)

            end_of_block = ''.join(block[-2:])
            if len(block) >= 2 and end_of_block == '\n\n':
                break
            else:
                self._cursor += 1


        paragraph_text = ''.join(block).strip()
        paragraph_block = self._parse_text(paragraph_text)

        return {
            'element_type': BlockType.p,
            'children': paragraph_block
        }

    def _parse_text(self, text: str) -> list[dict]:
        if not text:
            raise RuntimeError('')

        styles = self._parse_style(text)

        text_block = []
        itr = 0
        for style in styles:
            element_type = style['element_type']
            start_idx = style['start_idx']
            end_idx = style['end_idx']

            plain_text = text[itr:start_idx - 1]
            styled_text = text[start_idx:end_idx]

            if start_idx != 0 and plain_text:
                text_block.append({
                    'element_type': BlockType.text,
                    'children': [plain_text]
                })

            text_block.append({
                'element_type': element_type,
                'children': [styled_text]
            })

            itr = end_idx + 1

        return text_block

    def _parse_style(self, text: str) -> list[dict]:
        # TODO: add support for nested styles

        if not text:
            raise RuntimeError('no text block')

        style_stack = []
        done = []

        itr = 1
        lagr = 0
        while itr < len(text):
            front = text[itr]
            back = text[lagr]
            if front == '*' and back == '*':
                if len(style_stack) > 0 and style_stack[-1]['element_type'] == BlockType.bold:
                    bold_block = style_stack.pop()
                    bold_block['end_idx'] = itr + 1
                    done.append(bold_block)
                else:
                    style_stack.append({
                        'element_type': BlockType.bold,
                        'start_idx': lagr,
                        'end_idx': None,  # NOTE: end_idx is set to None until closing ** is found
                    })
            elif front == '_' and back == '_':
                if len(style_stack) > 0 and style_stack[-1]['element_type'] == BlockType.underline:
                    underline_block = style_stack.pop()
                    underline_block['end_idx'] = itr + 1
                    done.append(underline_block)
                else:
                    style_stack.append({
                        'element_type': BlockType.underline,
                        'start_idx': lagr,
                        'end_idx': None,  # NOTE: end_idx is set to None until closing __ is found
                    })
            elif front == '~' and back == '~':
                if len(style_stack) > 0 and style_stack[-1]['element_type'] == BlockType.strikethrough:
                    strikethrough_block = style_stack.pop()
                    strikethrough_block['end_idx'] = itr + 1
                    done.append(strikethrough_block)
                else:
                    style_stack.append({
                        'element_type': BlockType.strikethrough,
                        'start_idx': lagr,
                        'end_idx': None,  # NOTE: end_idx is set to None until closing ~~ is found
                    })
            elif front == '`':
                if len(style_stack) > 0 and style_stack[-1]['element_type'] == BlockType.code_inline:
                    code_inline_block = style_stack.pop()
                    code_inline_block['end_idx'] = itr + 1
                    done.append(code_inline_block)
                else:
                    style_stack.append({
                        'element_type': BlockType.code_inline,
                        'start_idx': itr,
                        'end_idx': None,  # NOTE: end_idx is set to None until closing ` is found
                    })

            lagr += 1
            itr += 1

        return done

    def _parse_blockquote(self, block: list[str]) -> dict:
        if not block:
            raise RuntimeError('')

        blockquote_block = list(filter(lambda s: s == '', block.split('> ')))
        return {
            'element_type': BlockType.blockquote,
            'children': blockquote_block
        }

    def _parse_link(self, block: list[str]) -> dict:
        pass

    def _parse_media(self):
        pass


if __name__ == '__main__':
    arg_parser = ArgumentParser()
    arg_parser.add_argument('--file', help='filepath to parse')
    arg_parser.add_argument('--folder', help='parse all markdown files in folder')
    args = arg_parser.parse_args()

    if args.folder:
        pass
    elif args.file:
        md_parser = MarkdownParser()
        md_json = md_parser.parse(args.file)

        print(md_json)

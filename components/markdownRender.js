
import React from 'react';
import ReactMarkdown from 'react-markdown';
import RemarkMathPlugin from 'remark-math';
//import { BlockMath, InlineMath } from 'react-katex';
//import 'katex/dist/katex.min.css';

const _mapProps = (props) => ({
  ...props,
  escapeHtml: false,
  remarkPlugins: [
    RemarkMathPlugin
  ],
  components: {
    ...props.renderers,
    math: ({ value }) => <BlockMath>{value}</BlockMath>,
    inlineMath: ({ value }) => <InlineMath>{value}</InlineMath>
  }
});

const MarkdownRender = (props) => <ReactMarkdown {..._mapProps(props)} />;

export default MarkdownRender;
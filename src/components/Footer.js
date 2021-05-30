import { css } from '@emotion/react'

const styles = css`
  padding: 8em 0;
  text-align: center;
  user-select: none;
  &,
  & a {
    color: #868e96;
  }
  & a:hover {
    text-decoration: underline;
  }
`

const Footer = () => (
  <div css={styles}>
    Made by <a href="https://github.com/amclio">amclio</a>. All rights reserved.
  </div>
)

export default Footer

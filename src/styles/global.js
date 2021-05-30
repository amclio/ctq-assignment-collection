import { css, Global } from '@emotion/react'

export const globalStyles = (
  <Global
    styles={css`
      html,
      body {
        font-family: 'Inter', 'Noto Sans KR', sans-serif;
        letter-spacing: -0.5px;
      }
      a {
        text-decoration: none;
        color: #000;
      }
      .gray {
        color: #868e96;
      }
    `}
  />
)

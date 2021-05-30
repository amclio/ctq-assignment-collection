import { css } from '@emotion/react'

const wrapperStyle = css`
  padding: 0.8em;
  border: 2px solid #dee2e6;
  border-radius: 5px;
`

const topStyle = css``

const mainTextStyle = css`
  padding: 0.75em 0;
  font-weight: bold;
  font-size: 2rem;
`

const bottomStyle = css`
  border-top: 1px solid #e9ecef;
  letter-spacing: initial;
  font-size: 0.9rem;
  padding: 8px 0;
  & a {
    color: #868e96;
  }
`

const Card = ({ text, subText, ...props }) => {
  return (
    <div css={wrapperStyle} {...props}>
      <div css={topStyle}>
        <div css={mainTextStyle}>{text}</div>
      </div>
      <div css={bottomStyle}>
        <div className="gray">{subText}</div>
      </div>
    </div>
  )
}

export default Card

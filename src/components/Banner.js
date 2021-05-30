import { css } from '@emotion/react'

const Banner = () => {
  return (
    <div
      css={css`
        display: flex;
        margin: 9em 0;
      `}
    >
      <div
        css={css`
          flex: 1 1 auto;
        `}
      >
        <div
          css={css`
            font-weight: bold;
            font-size: 3rem;
            @media (max-width: 576px) {
              font-size: 2rem;
            }
          `}
        >
          #CTQ_작품_컬렉션 🔥
        </div>
        <div
          className="gray"
          css={css`
            margin: 10px 0;
            @media (max-width: 576px) {
              font-size: 0.9rem;
            }
          `}
        >
          2021년 세일고 CTQ 동아리 부원의 과제를 모은 곳 입니다.
        </div>
      </div>
    </div>
  )
}

export default Banner

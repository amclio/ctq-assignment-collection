import { css } from '@emotion/react'
import { useState } from 'react'
import { IoLogoGithub } from 'react-icons/io5'
import Banner from '../components/Banner'
import Card from '../components/Card'
import UserContainer from '../components/UserContainer'
import { api, githubListApi } from '../lib/api'

const underlineStyle = css`
  margin: 4px 0;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`

const Index = ({ data }) => {
  const [activePerson, setActivePerson] = useState({
    name: '',
    github: '',
    defaultRepository: '',
  })

  const [isLoading, setLoading] = useState(false)
  const [repoResponse, setRepoResponse] = useState(null)

  const extractRepo = (url, user) => url.split(`${user}/`)[1]

  const handleClick = async (name) => {
    const currentInfo = data.find((el) => el.name === name)
    setActivePerson(currentInfo)

    const { github: clickedUser } = currentInfo
    const clickedRepo = extractRepo(
      currentInfo.defaultRepository,
      currentInfo.github
    )

    setLoading(true)

    await handleResponse({ name: clickedUser, repo: clickedRepo })

    setLoading(false)
  }

  const handleResponse = async ({ name, repo, path = '' }) => {
    const { data: repositoryData } = await api.get(`/repository/${name}`, {
      params: {
        repo,
        path,
      },
    })

    setRepoResponse(repositoryData)
  }

  const handleDirClick = async ({ github, dir }) => {
    await handleResponse({
      name: github,
      repo: extractRepo(activePerson.defaultRepository, github),
      path: `/${dir}`,
    })
  }

  return (
    <>
      <Banner />
      <UserContainer>
        {data.map(({ name, github, defaultRepository }) => (
          <div key={name}>
            <Card
              onClick={() => handleClick(name)}
              text={name}
              subText={
                <a
                  css={css`
                    width: 100%;
                    display: block;
                  `}
                  href={defaultRepository}
                >
                  <span style={{ paddingTop: '5px', marginRight: '4px' }}>
                    <IoLogoGithub size="12px" />
                  </span>
                  {github}
                </a>
              }
              css={css`
                cursor: pointer;
              `}
            />
            {activePerson.github === github &&
              (isLoading ? (
                <div
                  css={css`
                    margin: 1em 0;
                  `}
                >
                  Loading...
                </div>
              ) : (
                <>
                  <div
                    css={css`
                      margin: 1em 0;
                      font-weight: bold;
                    `}
                  >
                    어느 파일을 여시겠나요?
                  </div>
                  <ol
                    css={css`
                      padding: 0;
                      list-style: none;
                    `}
                  >
                    {repoResponse.map((el) => {
                      if (el.type === 'dir') {
                        return (
                          <div
                            key={el.name}
                            onClick={() =>
                              handleDirClick({
                                github,
                                dir: el.name,
                              })
                            }
                            css={underlineStyle}
                          >
                            /{el.name}
                          </div>
                        )
                      }
                      const gitCdnLink =
                        activePerson.defaultRepository.replace(
                          'github.com',
                          'gitcdn.link/repo'
                        ) +
                        '/main/' +
                        el.path
                      return (
                        <li key={el.name} css={underlineStyle}>
                          <a
                            href={gitCdnLink}
                            target="_black"
                            rel="noopener noreferrer"
                            css={underlineStyle}
                          >
                            {el.name}
                          </a>
                        </li>
                      )
                    })}
                  </ol>
                </>
              ))}
          </div>
        ))}
      </UserContainer>
    </>
  )
}

export const getStaticProps = async () => {
  const { data } = await githubListApi.get(
    '/ctq-assignment-members-github.json'
  )
  return {
    props: { data },
  }
}

export default Index

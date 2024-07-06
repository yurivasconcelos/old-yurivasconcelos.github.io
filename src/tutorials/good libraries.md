https://github.com/vercel/swr
import useSWR from 'swr'

function Profile() {
  const { data, error, isLoading } = useSWR('/api/user', fetcher)

  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  return <div>hello {data.name}!</div>
}


react router
https://reactrouter.com/en/main/start/tutorial


https://www.robinwieruch.de/react-libraries/
css stuff


//css libraries
https://www.radix-ui.com/primitives/docs/components/checkbox
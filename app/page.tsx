import { getServerSession } from 'next-auth'
import { prisma } from '../lib/prisma'
import { authOptions } from './api/auth/[...nextauth]/route'
import { User } from './user'

const Home = async () => {
  const user = await prisma.user.findFirst({
    where: { email: 'test@test.com' },
  })

  const session = await getServerSession(authOptions) //can use this for getting session data after login
  return (
    <div>
      Hello {user?.name}
      {JSON.stringify(session)}
      <User />
    </div>
  )
}

export default Home

import {prisma} from '../lib/prisma';

 const Home = async () => {
  const user = await prisma.user.findFirst({where: {email: 'test@test.com'}})
  return (
    <div>
      Hello {user?.name}
    </div>
  )
}

export default Home
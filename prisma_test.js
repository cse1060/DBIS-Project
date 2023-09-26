const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  const allUsers = await prisma.user.findMany()
  console.log(allUsers)
  const updateUser =await prisma.user.update({
    where : {
      id:1
    },
    data : {
        email : "four@gmail.com" , 
        verifyToken : "abcd",
        verifyTokenExpiry : new Date((new Date).getTime() + 60*60000),
        forgotPasswordTokenExpiry : new Date()
    }
})

}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
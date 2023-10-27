const { PrismaClient } = require('@prisma/client')
const { log } = require('console')

const prisma = new PrismaClient()

async function main() {
  try {
    const allUsers = await prisma.user_Profile.findMany()
    console.log(allUsers)
    // const updateUser = await prisma.user.update({
    //   where: {
    //     id: 1
    //   },
    //   data: {
    //     email: "four@gmail.com",
    //     verifyToken: "abcd",
    //     verifyTokenExpiry: new Date((new Date).getTime() + 60 * 60000),
    //     forgotPasswordTokenExpiry: new Date()
    //   }
    // })

    const property = await prisma.property.create({
      data: {
        agent_id: 1,
        date_added: new Date(),
        city: "a",
        Property_Type: "r",
        action: "a",
        subType: "a"
      }
    })

    const userProfile = await prisma.user_Profile.create({
      data: {
        prop_id: 1,
        user_id: 1,
        isOwned: true
      }
    })
    console.log(property);

  } catch (error) {
    console.log(error, "***");
  }

}

main()
//   .then(async () => {
//     await prisma.$disconnect()
//   })
//   .catch(async (e) => {
//     console.error(e)
//     await prisma.$disconnect()
//     process.exit(1)
//   })


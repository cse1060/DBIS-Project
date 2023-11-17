const { PrismaClient } = require('@prisma/client')
const { log } = require('console')

const prisma = new PrismaClient()

async function main() {
  try {

    const allUsers = await prisma.blog.findUnique({
      where: {
        blog_id: 2
      }
    })
    console.log(allUsers);
    // const allUsers = await prisma.user_Profile.findMany({
    //   include: {
    //     Property: true
    //   }
    // })
    // // const Blogs = await prisma.blog.create({
    // //   data: {
    // //     user_id: 1,
    // //     title: "H",
    // //     body: "Helloooooos",
    // //     imgurl: "abc"
    // //   }
    // // })
    // const blogs = await prisma.blog.findMany()
    // const property = await prisma.property.findMany()
    // console.log(allUsers)
    // console.log(property)
    // // const updateUser = await prisma.user.update({
    // //   where: {
    // //     id: 1
    // //   },
    // //   data: {
    // //     email: "four@gmail.com",
    // //     verifyToken: "abcd",
    // //     verifyTokenExpiry: new Date((new Date).getTime() + 60 * 60000),
    // //     forgotPasswordTokenExpiry: new Date()
    // //   }
    // // })
    // const userProfile = await prisma.user_Profile.create({
    //   data: {
    //     prop_id: property.length + 1,
    //     user_id: 1,
    //     isOwned: true
    //   }
    // })
    // // const userProfile2 = await prisma.user_Profile.create({
    // //   data: {
    // //     prop_id: 2,
    // //     user_id: 1,
    // //     isOwned: true
    // //   }
    // // })

    // const propert = await prisma.property.create({
    //   data: {
    //     id: property.length + 1,
    //     agent_id: 1,
    //     date_added: new Date(),
    //     city: "a",
    //     Property_Type: "r",
    //     action: "a",
    //     subType: "a"
    //   }
    // })

    // console.log(propert);

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


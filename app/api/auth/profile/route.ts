import { auth } from '@/lib/auth'
import dbConnect from '@/lib/dbConnect'
import UserModel from '@/lib/models/UserModel'
import bcrypt from 'bcryptjs'

export const PUT = auth(async (req) => {
  if (!req.auth) {
    return Response.json({ message: 'Not authotenticated' }, { status: 401 })
  }
  await dbConnect()

  const { user } = req.auth
  const { name, email, password } = await req.json()

  try {
    const dbUser = await UserModel.findById(user?._id)

    if (!dbUser) {
      return Response.json(
        { message: 'User not found' },
        {
          status: 404,
        }
      )
    }

    dbUser.name = name
    dbUser.email = email
    dbUser.password = password
      ? await bcrypt.hash(password, 5)
      : dbUser.password

    await dbUser.save()
    return Response.json({ message: 'User has been updated' })
  } catch (err: any) {
    return Response.json(
      { message: err.message },
      {
        status: 500,
      }
    )
  }
})

import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsEnum, Length } from 'class-validator'

export class AuthPayload {
  @ApiProperty({
    description: 'User id',
    type: String
  })
  @IsNotEmpty()
  sub: string
}

export class AuthToken {
  @ApiProperty({
    description: 'user auth token',
    type: String
  })
  @IsNotEmpty()
  access_token: string
}

export class AuthLogin {
  @ApiProperty({
    description: 'Username is required',
    type: String,
    required: true
  })
  @IsNotEmpty({
    message: 'Username is required'
  })
  readonly username: string

  @ApiProperty({
    description: 'Password is required',
    type: String,
    required: true,
    minLength: 8
  })
  @Length(8, null, {
    message: 'Password length must be at least 8 digits'
  })
  @IsNotEmpty({
    message: 'Password is required'
  })
  readonly password: string
}

export class AuthUser {
  @ApiProperty({
    description: 'User id',
    type: String
  })
  @IsNotEmpty()
  id: string
}
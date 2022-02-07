import {
  Controller,
  Request,
  Post,
  UseGuards,
  HttpCode,
  HttpStatus,
  Get,
  Body,
} from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import {
  ApiTags,
  ApiOperation,
  ApiBody,
  ApiOkResponse,
  ApiUnauthorizedResponse,
  ApiBearerAuth
} from '@nestjs/swagger'

import { AuthService } from '../auth'
import { AuthToken, AuthLogin } from '../models/auth'
import { User } from '../models/user'

@ApiTags('Authentication')
@Controller('/api/auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService
  ) { }

  @ApiOperation({ summary: 'Validate authentication token' })
  @ApiOkResponse({ description: 'Authentication token is valid' })
  @ApiUnauthorizedResponse({ description: 'The authentication token is invalid' })
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @Get()
  @HttpCode(HttpStatus.OK)
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  isAuthenticated(@Request() req): User { return req.user }

  @ApiOperation({ summary: 'Authenticate user' })
  @ApiBody({ description: 'User credentials', type: AuthLogin })
  @ApiOkResponse({ description: 'Authentication token', type: AuthToken })
  @ApiUnauthorizedResponse({ description: 'The username or password entered are not valid' })
  @UseGuards(AuthGuard('local'))
  @Post()
  @HttpCode(HttpStatus.OK)
  authenticate(
    @Request() request: { user: User }
  ): Promise<AuthToken> {
    return this.authService.getAccessToken(request.user)
  }

  @ApiOperation({ summary: 'Get Detail User' })
  @ApiOkResponse({ description: 'Authentication token is valid' })
  @ApiUnauthorizedResponse({ description: 'The authentication token is invalid' })
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @Get('detail')
  @HttpCode(HttpStatus.OK)
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  UserDetail(@Body() req): Promise<User> { return this.authService.userDetail(req) }



}
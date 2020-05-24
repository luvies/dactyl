// Copyright 2020 Liam Tan. All rights reserved. MIT license.

// For dependency injection to work, you need to import a reflect-metadata polyfill
import "https://cdn.pika.dev/@abraham/reflection@^0.7.0";

// For your own project, deps.ts should re-export
// these deps from https://deno.land/x/dactyl/mod.ts
export {
  Controller,
  Get,
  Post,
  Put,
  Patch,
  Delete,
  Param,
  Body,
  Query,
  Header,
  Context,
  Request,
  Response,
  HttpStatus,
  HttpException,
  BadRequestException,
  Application,
  RouterContextService,
  RequestService,
  ResponseService,
} from "../mod.ts";

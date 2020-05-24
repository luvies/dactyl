import {
  RouterContext as OakRouterContext,
  Context,
  Router,
  Request,
  Response,
  RouteParams,
} from "./deps.ts"

// These provide proper type inference for both the dependency injector and the
// controllers.

export abstract class RouterContextService<
  P extends RouteParams = RouteParams,
  S extends Record<string | number | symbol, any> = Record<string, any>,
> extends Context<S> implements OakRouterContext<P>  {
  abstract params: P;
  abstract router: Router;
}

export abstract class RequestService extends Request {}

export abstract class ResponseService extends Response {}

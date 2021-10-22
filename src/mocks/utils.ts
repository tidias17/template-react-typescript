import { context, rest as mswRest } from 'msw';

const defaultOptions = {
  status: 200,
  delay: 0,
};

/**
 * @typedef {import('msw').ResponseResolver} ResponseResolver
 * @typedef {import('msw/lib/types/setupWorker/glossary').Mask} Mask
 * @typedef {typeof defaultOptions} Options
 *
 * @param {keyof mswRest} method
 */
function createRequestHandler(method:any) {
  /**
   * @param {Mask} mask
   * @param {ResponseResolver} resolver
   * @param {Options} options
   */
  function requestHandler(mask:any, resolver = ():any => {}, options:any) {
    function nextResolver(req:any, res:any, ctx:any) {
      const json:any = resolver();

      if (json instanceof Promise) return json;

      const { status, delay }:any = {
        ...defaultOptions,
        ...options,
      };
      const transformers = [ctx.json(json), ctx.status(status || 200)];

      if (delay) {
        transformers.push(context.delay(delay));
      }

      return res(...transformers);
    }
    // @ts-ignore
    return mswRest[method](mask, nextResolver);
  }

  return requestHandler;
}

export const rest = {
  get: createRequestHandler('get'),
  post: createRequestHandler('post'),
  put: createRequestHandler('put'),
  patch: createRequestHandler('patch'),
  delete: createRequestHandler('delete'),
  options: createRequestHandler('options'),
  head: createRequestHandler('head'),
};

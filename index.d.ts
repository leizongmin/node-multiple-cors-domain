/**
 * multiple-cors-domain type
 * Connect middleware that allow multiple CORS domain
 *
 * @author Zongmin Lei <leizongmin@gmail.com>
 */

interface Options {
  // a list of domains
  domain: string[];
  // allow any domain
  any: boolean;
  // additional headers
  headers: {
    [key: String]: string;
  };
  maxAge: number;
  credentials: boolean;
  allowHeaders: string[];
  allowMethods: string[];
}

/**
 * Returns multiple-cors-domain middleware
 */
function multipleCORSDomain(options: Options);

export = multipleCORSDomain;
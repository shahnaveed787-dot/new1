declare module "react" {
  interface HTMLAttributes<T> {
    /** WebMCP Declarative API — tool identifier for agents. */
    toolname?: string;
    /** WebMCP Declarative API — tool purpose for agents. */
    tooldescription?: string;
    /** WebMCP Declarative API — allow agent auto-submit. */
    toolautosubmit?: boolean | "";
    /** WebMCP Declarative API — parameter description in the tool schema. */
    toolparamdescription?: string;
  }
}

export {};

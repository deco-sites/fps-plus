import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 587,
  site: "fps-plus",
  domains: ["fps-plus.deco.site"],
});
import { Analytics } from '@segment/analytics-node'

const analyticsSingleton = () => {
  const writeKey = process.env.NEXT_PUBLIC_SEGMENT_WRITE_KEY as string
  if (!writeKey) {
    // Return a mock analytics instance if write key is not configured
    return {
      track: () => Promise.resolve(),
      identify: () => Promise.resolve(),
      page: () => Promise.resolve(),
      group: () => Promise.resolve(),
      alias: () => Promise.resolve()
    } as any
  }
  return new Analytics({ writeKey })
}

declare global {
  var analyticsGlobal: undefined | ReturnType<typeof analyticsSingleton>
}

const analytics = globalThis.analyticsGlobal ?? analyticsSingleton()

export default analytics

if (process.env.NODE_ENV !== 'production') globalThis.analyticsGlobal = analytics
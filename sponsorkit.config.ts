import { fileURLToPath } from 'node:url'
import {
  defineConfig,
  tierPresets,
  type Provider,
  type ProviderName,
  type Tier
} from 'sponsorkit'
import { SponsorkitRenderOptions } from 'sponsorkit'

import { manualProvider } from './src/providers/manual'

const outputDir = fileURLToPath(new URL('./public', import.meta.url))

const tiers: Tier[] = [
  {
    title: 'XS (Past Sponsors)',
    monthlyDollars: -1,
    preset: tierPresets.xs,
  },
  {
    title: 'SM (Backers)',
    preset: tierPresets.small,
  },
  {
    title: 'MD (Sponsors)',
    monthlyDollars: 4,
    preset: tierPresets.medium,
  },
  {
    title: 'LG (Sponsors)',
    monthlyDollars: 16,
    preset: tierPresets.large,
  },
  {
    title: 'XL (Sponsors)',
    monthlyDollars: 32,
    preset: tierPresets.xl,
  },
]

const providers: (ProviderName | Provider)[] = [
  // 'github',
  // 'patreon',
  manualProvider
]

const renders: SponsorkitRenderOptions[] = [
  {
    name: 'sponsors',
    width: 800,
  },
  {
    name: 'sponsors.wide',
    width: 1800,
  },
  {
    name: 'sponsors.circles',
    width: 1000,
    includePastSponsors: true,
    renderer: 'circles',
  },
]

export default defineConfig({
  tiers,
  providers,
  renders,

  outputDir,

  // Replace links and avatars
  // replaceLinks: {
  //   'https://github.com/antfu': 'https://antfu.me',
  // },
  // replaceAvatars: {
  //   ...
  // },

  // Automatically Merge sponsors from different platforms
  sponsorsAutoMerge: true,

  // Manually merge sponsors from different platforms
  // mergeSponsors: [
  //   [
  //     { login: 'patak-dev', provider: 'github' },
  //     { login: 'patak', provider: 'opencollective' },
  //   ],
  // ],
})
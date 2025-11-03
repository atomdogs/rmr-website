// Create responsive WebP images for the Fire Remediation card using sharp
// sizes: 480, 768, 1024, 1536
import sharp from 'sharp'
import { mkdirSync, existsSync } from 'fs'

const input = 'public/uploads/fire-remediation/IMG_8461.jpg'
const outDir = 'public/uploads/fire-remediation'
const baseName = 'IMG_8461'
const widths = [480, 768, 1024, 1536] as const

async function run() {
  if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true })
  await Promise.all(
    widths.map(async (w) => {
      const outfile = `${outDir}/${baseName}-${w}.webp`
      await sharp(input)
        .resize({ width: w })
        .webp({ quality: 80 })
        .toFile(outfile)
      console.log('wrote', outfile)
    })
  )
  const lqip = `${outDir}/${baseName}-lqip.webp`
  await sharp(input).resize({ width: 40 }).webp({ quality: 40 }).toFile(lqip)
  console.log('wrote', lqip)
}

run().catch((e) => {
  console.error(e)
  process.exit(1)
})

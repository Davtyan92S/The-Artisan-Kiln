import type { ReactNode } from 'react'
import type { IconProps, TilePreviewIconProps } from './types'

export type { IconProps, TilePattern, TilePreviewIconProps } from './types'

export const UserIcon = ({ className }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path
      fillRule="evenodd"
      d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
      clipRule="evenodd"
    />
  </svg>
)

export const BuildingIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M30 5L10 15V25H50V15L30 5Z" fill="#508070" stroke="#1c180d" strokeWidth="2" />
    <rect x="15" y="25" width="30" height="30" fill="#eadfc3" stroke="#1c180d" strokeWidth="2" />
    <rect x="25" y="35" width="10" height="20" fill="#faf7e8" stroke="#1c180d" strokeWidth="2" />
    <rect x="10" y="55" width="40" height="5" fill="#1c180d" />
  </svg>
)

export const KilnIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 50 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M25 5C10 5 5 15 5 35V55H45V35C45 15 40 5 25 5Z" fill="#b07050" stroke="#1c180d" strokeWidth="2" />
    <path d="M15 35C15 25 35 25 35 35V55H15V35Z" fill="#faf7e8" stroke="#1c180d" strokeWidth="2" />
    <path d="M20 45C20 40 30 40 30 45" stroke="#b07050" strokeWidth="3" strokeLinecap="round" />
    <path d="M25 45V55" stroke="#b07050" strokeWidth="3" />
  </svg>
)

export const HandTileIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M40 70 L30 100 L70 100 L60 70 Z" fill="transparent" stroke="#1c180d" strokeWidth="2" />
    <rect x="30" y="40" width="40" height="40" transform="rotate(-15 50 60)" fill="#b07050" stroke="#1c180d" strokeWidth="2" />
    <circle cx="45" cy="55" r="5" fill="#eadfc3" />
  </svg>
)

export const PaletteHandIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="50" rx="30" ry="25" transform="rotate(-20 50 50)" fill="#eadfc3" stroke="#1c180d" strokeWidth="2" />
    <circle cx="35" cy="40" r="4" fill="#b07050" />
    <circle cx="45" cy="35" r="4" fill="#508070" />
    <circle cx="60" cy="45" r="4" fill="#406058" />
    <path d="M50 75 L60 100 L40 100 Z" fill="transparent" stroke="#1c180d" strokeWidth="2" />
  </svg>
)

export const PlusIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
)

export const MinusIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 7h12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
)

export const TrashIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 6h18" stroke="#fdfaeb" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M8 6V4h8v2" stroke="#fdfaeb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" stroke="#fdfaeb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10 11v6M14 11v6" stroke="#fdfaeb" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

export const DocumentIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="2" width="16" height="20" rx="2" stroke="#1c180d" strokeWidth="2" fill="#faf7e8" />
    <path d="M8 6h8M8 10h8M8 14h5" stroke="#1c180d" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M4 6h2M4 10h2M4 14h2" stroke="#1c180d" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

export const CreditCardIcon = ({ className }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className={className}>
    <path d="M64 32C28.7 32 0 60.7 0 96v32H576V96c0-35.3-28.7-64-64-64H64zM576 224H0V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V224zM112 352h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm112 16c0-8.8 7.2-16 16-16H368c8.8 0 16 7.2 16 16s-7.2 16-16 16H240c-8.8 0-16-7.2-16-16z" />
  </svg>
)

export const PaypalIcon = ({ className }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className={className}>
    <path d="M111.4 295.9c-3.5 19.2-17.4 108.7-21.5 134-.3 1.8-1 2.5-3 2.5H12.3c-7.6 0-13.1-6.6-12.1-13.9L58.8 46.6c1.5-9.6 10.1-16.9 20-16.9 152.3 0 165.1-3.7 204 11.4 60.1 23.3 65.6 79.5 44 140.3-21.5 62.6-72.5 89.5-140.1 90.3-43.4 .7-69.5-7-75.3 24.2zM357.1 152c-1.8-1.3-2.5-1.8-3 1.3-2 11.4-5.1 22.5-8.8 33.6-39.9 113.8-150.5 103.9-204.5 103.9-6.1 0-10.1 3.3-10.9 9.4-22.6 140.4-27.1 169.7-27.1 169.7-1 7.1 3.5 12.9 10.6 12.9h63.5c8.6 0 15.7-6.3 17.4-14.9 .7-5.4-1.1 6.1 14.4-91.3 4.6-22 14.3-19.7 29.3-19.7 71 0 126.4-28.8 142.9-112.3 6.5-34.8 4.6-71.4-23.8-92.6z" />
  </svg>
)

export const AppleIcon = ({ className }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className={className}>
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 24 184.8 8 273.5q-9 62.1 26 122.3c21.8 38.1 58 96.1 98.7 96.1 36.4 0 52.2-23.7 97.9-23.7 45.2 0 58 23.7 95 23.7 42.7 0 74.3-52 98.7-96.1 19.3-34.9 29.1-71.7 30.3-73.4-1.2-1.3-35.9-14-35.9-53.7zM263.9 89.3c21.8-26.9 29.5-62.1 24.3-95.2-30.8 1.4-65 17.5-85.7 43.1-18.7 23.2-27.5 56.5-23.1 87.2 33 2.5 65.4-14.7 84.5-35.1z" />
  </svg>
)

export const BankTransferIcon = ({ className }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className={className}>
    <path d="M243.4 2.6l-224 96c-14 6-21.8 21-18.7 35.8S16.8 160 32 160v8c0 13.3 10.7 24 24 24H456c13.3 0 24-10.7 24-24v-8c15.2 0 28.3-10.7 31.3-25.6s-4.8-29.9-18.7-35.8l-224-96c-8-3.4-17.2-3.4-25.2 0zM128 224H64V420.3c-.6 .3-1.2 .7-1.8 1.1l-48 32c-11.7 7.8-17 22.4-12.9 35.9S17.9 512 32 512H480c14.1 0 26.5-9.2 30.6-22.7s-1.1-28.1-12.9-35.9l-48-32c-.6-.4-1.2-.7-1.8-1.1V224H384V416H344V224H280V416H240V224H176V416H128V224zM256 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
  </svg>
)

export const ApplePayBadge = ({
  className,
  iconClassName,
  labelClassName,
}: {
  className?: string
  iconClassName?: string
  labelClassName?: string
}) => (
  <div className={className}>
    <AppleIcon className={iconClassName} />
    <span className={labelClassName}>Pay</span>
  </div>
)

const getTilePreviewFill = (pattern: string) => {
  if (pattern === 'dot') {
    return '#b07050'
  }
  return '#404868'
}

const renderTilePreviewPattern = (pattern: string) => {
  if (pattern === 'dot') {
    return (
      <>
        <circle cx="30" cy="30" r="10" fill="#eadfc3" opacity="0.9" />
        <circle cx="12" cy="12" r="7" fill="#b86048" />
        <circle cx="48" cy="48" r="7" fill="#b86048" />
      </>
    )
  }

  return (
    <>
      <path d="M0 16 Q10 10 17 16 T32 16" fill="none" stroke="#f9f6e7" strokeWidth="2" />
      <path d="M0 24 Q10 18 17 24 T32 24" fill="none" stroke="#588078" strokeWidth="2" />
      <path d="M0 32 Q10 26 17 32 T32 32" fill="none" stroke="#f9f6e7" strokeWidth="2" />
    </>
  )
}

export const TilePreviewIcon = ({ className, pattern = 'dot' }: TilePreviewIconProps) => (
  <svg viewBox="0 0 60 60" className={className}>
    <rect width="60" height="60" fill={getTilePreviewFill(pattern)} />
    {renderTilePreviewPattern(pattern)}
  </svg>
)

export const CartHandIllustration = ({ className }: IconProps) => (
  <svg viewBox="0 0 60 75" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="8" y="5" width="32" height="32" rx="2" transform="rotate(-20 8 5)" fill="#b07050" stroke="#1c180d" strokeWidth="1.5" />
    <path d="M10 8 Q24 2 32 16" stroke="#fdfaeb" strokeWidth="1" fill="none" />
    <circle cx="20" cy="20" r="4" fill="#eadfc3" opacity="0.8" />
    <path d="M5 55 Q8 45 12 40 Q16 35 20 38 L22 55" fill="#f4f1e2" stroke="#1c180d" strokeWidth="1.2" />
    <path d="M22 55 Q24 42 28 38 Q30 36 32 39 L33 55" fill="#f4f1e2" stroke="#1c180d" strokeWidth="1.2" />
    <path d="M33 55 Q34 43 37 40 Q39 38 41 41 L41 55" fill="#f4f1e2" stroke="#1c180d" strokeWidth="1.2" />
    <path d="M5 55 Q5 68 10 72 L40 72 Q45 68 41 55 Z" fill="#f4f1e2" stroke="#1c180d" strokeWidth="1.2" />
  </svg>
)

export const LeftBorderLeaves = ({ className }: IconProps) => (
  <svg className={className} width="100" height="100%" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 50 Q40 60 10 90 Q-10 60 10 50 Z" fill="#508070" />
    <path d="M10 250 Q40 260 10 290 Q-10 260 10 250 Z" fill="#508070" />
    <path d="M10 450 Q40 460 10 490 Q-10 460 10 450 Z" fill="#508070" />
    <path d="M10 650 Q40 660 10 690 Q-10 660 10 650 Z" fill="#508070" />
  </svg>
)

export const RightBorderLeaves = ({ className }: IconProps) => (
  <svg className={className} width="100" height="100%" xmlns="http://www.w3.org/2000/svg">
    <path d="M90 100 Q60 110 90 140 Q110 110 90 100 Z" fill="#508070" />
    <path d="M90 300 Q60 310 90 340 Q110 310 90 300 Z" fill="#508070" />
    <path d="M90 500 Q60 510 90 540 Q110 510 90 500 Z" fill="#508070" />
    <path d="M90 700 Q60 710 90 740 Q110 710 90 700 Z" fill="#508070" />
  </svg>
)

export const MobileFooterTiles = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 90 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="30" width="30" height="30" rx="1" fill="#404868" stroke="#1c180d" strokeWidth="1.5" />
    <path d="M2 38 Q10 32 17 38 T32 38" fill="none" stroke="#f9f6e7" strokeWidth="1.5" />
    <path d="M2 44 Q10 38 17 44 T32 44" fill="none" stroke="#588078" strokeWidth="1.5" />
    <path d="M2 50 Q10 44 17 50 T32 50" fill="none" stroke="#f9f6e7" strokeWidth="1.5" />
    <rect x="35" y="38" width="28" height="28" rx="1" fill="#f2e8d8" stroke="#1c180d" strokeWidth="1.5" />
    <circle cx="49" cy="52" r="6" fill="#b07050" />
    <circle cx="40" cy="44" r="4" fill="#b07050" />
    <circle cx="58" cy="44" r="4" fill="#b07050" />
    <circle cx="40" cy="60" r="4" fill="#b86048" />
    <circle cx="58" cy="60" r="4" fill="#b86048" />
    <circle cx="15" cy="20" r="5" fill="#b07050" />
    <circle cx="25" cy="15" r="4" fill="#b07050" />
    <circle cx="8" cy="14" r="3" fill="#b07050" />
    <path d="M15 5 Q18 12 15 20" stroke="#406058" strokeWidth="1.5" fill="none" />
    <path d="M8 8 Q10 14 8 20" stroke="#406058" strokeWidth="1.5" fill="none" />
  </svg>
)

export const MobileFooterHand = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M60 10 Q70 25 65 40" stroke="#406058" strokeWidth="1.5" fill="none" />
    <ellipse cx="72" cy="18" rx="12" ry="6" transform="rotate(35 72 18)" fill="#6b8e6f" />
    <ellipse cx="65" cy="30" rx="10" ry="5" transform="rotate(-15 65 30)" fill="#588078" />
    <ellipse cx="75" cy="35" rx="8" ry="4" transform="rotate(50 75 35)" fill="#6b8e6f" />
    <path d="M85 20 Q90 30 88 42" stroke="#406058" strokeWidth="1.2" fill="none" />
    <ellipse cx="93" cy="26" rx="9" ry="4" transform="rotate(40 93 26)" fill="#588078" />
    <path d="M70 100 L65 72 Q60 62 68 56 Q76 50 83 58 L85 100" fill="#f4f1e2" stroke="#1c180d" strokeWidth="1.3" />
    <rect x="52" y="38" width="36" height="36" rx="2" transform="rotate(-18 70 56)" fill="#f2e8d8" stroke="#1c180d" strokeWidth="1.5" />
    <circle cx="70" cy="56" r="7" fill="#b07050" />
    <circle cx="60" cy="48" r="5" fill="#b07050" />
    <circle cx="80" cy="48" r="5" fill="#b07050" />
    <circle cx="60" cy="65" r="4" fill="#b86048" />
    <circle cx="80" cy="65" r="4" fill="#b86048" />
  </svg>
)

export const iconWithLabel = (icon: ReactNode, label: string) => ({ icon, label })

export { PaletteTileSvg } from './palette-tile'
export { TileSvg } from './catalog-tile'

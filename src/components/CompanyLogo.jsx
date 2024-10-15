import Image from 'next/image'
import Link from 'next/link'
import companyLogo from '../components/images/logos/site_logo.svg'
import useWindowDimensions from '../components/useWindowSize'
import clsx from 'clsx'
import BlurImage from './blur-image'

const CompanyLogo = ({ color }) => {
  const { width, height } = useWindowDimensions()
  return (
    <div className="company-logo mb-2 flex lg:mr-0  xl:mr-14">
      <div className="company-logo-left inline-flex ">
        <BlurImage
          alt="company logo"
          className="mr-0  h-10 w-10"
          // height="30"
          src={companyLogo}
          // width="30"
          width={width / 20}
          height={height / 23}
        />
        <div id="logo-text" className="flex-row px-2 ">
          <div
            className={clsx(
              color ?? color,
              'company-logo-line-two  flex -pl-2 font-extrabold dark:text-white'
            )}
          >
            <Link href="/" className={clsx(color ?? color)}>
              Nasdesign
            </Link>
          </div>
          <div className="header-line-three flex ">
            <h3 id="slogan" className={clsx([
                color ?? [color, 'company-logo-line-three'],
                'company-logo-line-three dark:text-slate-100',
              ])}
            >
              {/* <span className={clsx(color ?? color, "")}> */}
                Never stop being inspired
              {/* </span> */}
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}


export default CompanyLogo 
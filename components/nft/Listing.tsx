import { dateOptions, useTranslation } from '@/lib/i18n';
import Link from '../Link';
import { CtaLink } from './buttons';
import Image from './Images';
import { Block, RCol, RRow } from './Layout';

interface Price {
  symbol: string;
  amount: number;
}
export interface ResponseItem {
  id: number;
  name: string;
  imageURL: string;
  price: Price;
  closingDate: string;
  isSold: boolean;
  winningBid?: Price;
  winnerAddress?: string;
}

interface Props {
  current: number;
}
const faqURL = "https://www.notion.so/Preguntes-freq-ents-NFTs-d-Advent-e5a72e83bd5b49cc97790d9ad0188996";

const Listing = ({ current }: Props) => {
  const { t } = useTranslation();
  const imageURL = require(`@/public/images/tio_${current}.jpg`);
  return (
    <Block>
      <RRow>
        <RCol>
          <header>
            <span className="text-1xl text-[#777]">{t('nft:intro.date', { date: new Date(), formatParams: { date: dateOptions } })}</span>
            <h1 className="flex text-3xl lg:text-5xl my-8 mt-2">{t('nft:intro.label', { n: current })}</h1>
          </header>
          <div className="block lg:hidden">
            <Image width="358" height="512" className="min-h-lg my-10" src={imageURL} caption={t('nft:intro.help.log_count', { unit: current, total: 24 })} />
          </div>
          <p className="max-w-2xl lg:min-h-80">
            {t('nft:intro.text')}
            <Link className="underline" newTab={true} href={faqURL}>{t('nft:intro.link')}</Link>.
          </p>
          <div className="my-10 flex flex-col">
            <CtaLink href="https://opensea.io/CatalanDAO">{t('nft:intro.cta')}</CtaLink>
            <div className="flex flex-row justify-around p-2 my-3">
              <Link newTab={true} href="https://www.notion.so/catalandao/Com-participar-de-la-subhasta-dels-NFT-d-advent-02422855608b4385b75ba5dca4101afb" className="text-sm lg:text-sm hover:underline">
                <span className="mx-2">&#x2139;</span>{t('nft:intro.help.involvement')}</Link>
              <Link href={faqURL} className="text-sm lg:text-sm hover:underline">
                <span className="mx-2">&#x2753;</span>{t('nft:intro.help.faq')}</Link>
            </div>
          </div>
        </RCol>
        <RCol className="hidden lg:flex">
          <Image width="358" height="512" className="mx-auto w-128" src={imageURL} caption={t('nft:intro.help.log_count', { unit: current, total: 24 })} />
        </RCol>
      </RRow>
    </Block>
  );
};

export default Listing;

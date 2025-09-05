import { JSDOM } from 'jsdom';

import type { CardLinkMetadataType } from '@/types/markdown';
import type { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const url = searchParams.get('url') ?? undefined;

  let metaData: CardLinkMetadataType = {
    url: url,
    title: '',
    description: '',
    image: '',
  };

  if (!url) {
    return Response.json({
      success: false,
      metaData,
    });
  }

  const cardLinkData = await getCardLinkData(url);
  if (!cardLinkData) {
    return Response.json({
      success: false,
      metaData,
    });
  }
  metaData = cardLinkData;
  return Response.json({
    success: true,
    metaData,
  });
}

export async function getCardLinkData(url: string) {
  const doms = await JSDOM.fromURL(url);
  const document = doms.window.document;
  const titleTags = document.getElementsByTagName('title');
  const metaTags = document.getElementsByTagName('meta');
  const imageTags = document.getElementsByTagName('img');

  if (metaTags.length === 0) {
    return;
  }
  const metaData: CardLinkMetadataType = {
    url: url,
    title: '',
    description: '',
    image: '',
  };

  // get info frm meta
  for (const metaTag of metaTags) {
    let pro = metaTag.getAttribute('property');
    if (typeof pro == 'string') {
      // <meta property="title" content="xxxx" />
      if (/title/.exec(pro) && metaData.title === '') {
        metaData.title = metaTag.getAttribute('content') ?? '';
      }
      // <meta property="description" content="xxxx" />
      if (/description/.exec(pro)) {
        metaData.description = metaTag.getAttribute('content') ?? '';
      }
      // <meta property="image" content="xxxx" />
      if (/image/.exec(pro)) {
        metaData.image = metaTag.getAttribute('content') ?? '';
      }
    }
    pro = metaTag.getAttribute('name');
    if (typeof pro == 'string') {
      // <meta name="name" content="xxxx" />
      if (/title/.exec(pro) && metaData.title === '') {
        metaData.title = metaTag.getAttribute('content') ?? '';
      }
      // <meta name="description" content="xxxx" />
      if (/description/.exec(pro)) {
        metaData.description = metaTag.getAttribute('content') ?? '';
      }
      // <meta name="image" content="xxxx" />
      if (/image/.exec(pro)) {
        metaData.image = metaTag.getAttribute('content') ?? '';
      }
    }
  }

  // get info from title tag
  for (const titleTag of titleTags) {
    console.log(titleTag.textContent);
    if (titleTag.textContent) {
      metaData.title = titleTag.textContent;
    }
    break;
  }

  // get info from image tag
  for (const imageTag of imageTags) {
    if (metaData.image === '' && imageTag.src) {
      metaData.image = imageTag.src;
    }
    break;
  }

  return metaData;
}

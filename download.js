const ytdl = require('ytdl-core')
const fs = require('fs')
const path = require('path')

const links = [
  'https://www.youtube.com/watch?v=9P8mASSREYM',
  'https://www.youtube.com/watch?v=RY6B7JSBRRg',
  'https://www.youtube.com/watch?v=e-3UPyuOCq0',
  'https://www.youtube.com/watch?v=fUG8h5XopnU',
  'https://www.youtube.com/watch?v=hvYKrqnY8LM',
  'https://www.youtube.com/watch?v=f-6GAntaum4',
  'https://www.youtube.com/watch?v=Ql5kyJaYbls',
  'https://www.youtube.com/watch?v=nfAxNTmme64',
  'https://www.youtube.com/watch?v=ZHn726VDoIY',
  'https://www.youtube.com/watch?v=sigcnKAPddM',
  'https://www.youtube.com/watch?v=8jhLvnm7fmE',
  'https://www.youtube.com/watch?v=vpSDQawRpEk',
  'https://www.youtube.com/watch?v=TaDGyvh2Ud0',
  'https://www.youtube.com/watch?v=GOdu5C8JzL8',
  'https://www.youtube.com/watch?v=BeXbCgRxifs',
  'https://www.youtube.com/watch?v=keP1PygtJ8c',
  'https://www.youtube.com/watch?v=7UouvxZ6OaM',
  'https://www.youtube.com/watch?v=OYzrF4wuDKs',
  'https://www.youtube.com/watch?v=yoEHWwEVvzY',
  'https://www.youtube.com/watch?v=AWbYJgsXHQ4',
  'https://www.youtube.com/watch?v=QcUU89xKu70',
  'https://www.youtube.com/watch?v=1XEe-ng57GA',
  'https://www.youtube.com/watch?v=TOIRxWQPgi0',
  'https://www.youtube.com/watch?v=Isrmm6XhAdA',
  'https://www.youtube.com/watch?v=NaYs1Gdg4AE',
  'https://www.youtube.com/watch?v=ssVYQLGUHiI',
  'https://www.youtube.com/watch?v=j4nAZaPQzwc',
  'https://www.youtube.com/watch?v=5-qPviQG0AQ',
  'https://www.youtube.com/watch?v=d5unMDna5ng',
  'https://www.youtube.com/watch?v=FZTaD32ueE8',
  'https://www.youtube.com/watch?v=3eUZeuGXo_U',
  'https://www.youtube.com/watch?v=cPqG8-NoxM0',
  'https://www.youtube.com/watch?v=UP8s2_8jxIQ',
  'https://www.youtube.com/watch?v=DgLb5E6omTg',
  'https://www.youtube.com/watch?v=IbA9z9iMEJs',
  'https://www.youtube.com/watch?v=k9b_tIhnkls',
  'https://www.youtube.com/watch?v=CQ5yHU1wYOo',
  'https://www.youtube.com/watch?v=yFvLLPBubfw',
  'https://www.youtube.com/watch?v=cBWzJlVWuR0',
  'https://www.youtube.com/watch?v=5QDrrirlgmI',
  'https://www.youtube.com/watch?v=aZkZUduCauo',
  'https://www.youtube.com/watch?v=GgzWFxIiwK4',
  'https://www.youtube.com/watch?v=wqHGLjuXuHo',
  'https://www.youtube.com/watch?v=tuxk_VbocBk',
  'https://www.youtube.com/watch?v=je8jPi8KOY4',
  'https://www.youtube.com/watch?v=Y8HJCfWRMTE',
  'https://www.youtube.com/watch?v=lmB340ym6SE',
  'https://www.youtube.com/watch?v=_v_irwUqBUM',
  'https://www.youtube.com/watch?v=V2SJpj2Jrx4',
  'https://www.youtube.com/watch?v=k0UTW9dwfbk',
  'https://www.youtube.com/watch?v=NHr1HduGz08',
  'https://www.youtube.com/watch?v=_14sPRuHcYw',
  'https://www.youtube.com/watch?v=Tj22PRt2hiU',
  'https://www.youtube.com/watch?v=c0RnUgZSIDs',
  'https://www.youtube.com/watch?v=xm108xB0LT0',
  'https://www.youtube.com/watch?v=9g_3Zsoj17I',
  'https://www.youtube.com/watch?v=vWWd5ezQTic',
  'https://www.youtube.com/watch?v=ZRZngn_GdXY',
  'https://www.youtube.com/watch?v=V-ntY44UvhM',
  'https://www.youtube.com/watch?v=T2Z6JVzz854',
  'https://www.youtube.com/watch?v=2SLLvO9OK10',
  'https://www.youtube.com/watch?v=BYvH0G02uuI',
  'https://www.youtube.com/watch?v=NNxkIOlMBDc',
  'https://www.youtube.com/watch?v=vS86x_e0zBk',
  'https://www.youtube.com/watch?v=BxdXXnL0xLw',
  'https://www.youtube.com/watch?v=d3cfV2Y0_p0',
  'https://www.youtube.com/watch?v=Lfgdc8r8CRE',
  'https://www.youtube.com/watch?v=Aiqzfmy9A_4',
  'https://www.youtube.com/watch?v=K08z-qiySZg',
  'https://www.youtube.com/watch?v=B5wyB5QiseU',
  'https://www.youtube.com/watch?v=vCpqiRabmDk',
  'https://www.youtube.com/watch?v=dhLo-GhOPRw',
  'https://www.youtube.com/watch?v=ae8lxOOhOtY',
  'https://www.youtube.com/watch?v=jbcChDTnPuU',
  'https://www.youtube.com/watch?v=ODL0Dlh7ZFE',
  'https://www.youtube.com/watch?v=H4ptrFimcSM',
  'https://www.youtube.com/watch?v=TcnRPXPM68Q',
  'https://www.youtube.com/watch?v=9wjWM0ZpDuU',
  'https://www.youtube.com/watch?v=KmxAH7ng8Qw',
]

async function downloadVideo(link) {
  const info = await ytdl.getInfo(link)

  // save the high qulity to disk in /videos/
  console.log(`Downloading ${info.videoDetails.title}`)

  const videoPath = path.join(
    __dirname,
    'videos',
    `${info.videoDetails.title}.mp4`
  )

  ytdl(link).pipe(fs.createWriteStream(videoPath))
}

async function download() {
  for (let i = 0; i < links.length; i++) {
    await downloadVideo(links[i])
  }
}

download()

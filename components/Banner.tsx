import Image from 'next/image'

export function Banner(props) {
  return (
    <section className='wrap' id='bedAdvantage'>
      <div className='banner'>
        <h2 className='banner-text'>
          窩窩家居
          <br />
          跟您一起品味生活
        </h2>
      </div>
      <h3 className='section-title'>床墊優勢</h3>
      <ul className='bedAdvantage'>
        <li>
          <img
            className='mb-2'
            src='https://i.imgur.com/tR426y5.png'
            alt='原木料環保'
          />
          <p className='bedAdvantage-text'>原木料環保</p>
        </li>
        <li>
          <img
            className='mb-2'
            src='https://i.imgur.com/Fd2MiBb.png'
            alt='好收納'
          />
          <p className='bedAdvantage-text'>好收納</p>
        </li>
        <li>
          <img
            className='mb-2'
            src='https://github.com/hexschool/js-training/blob/main/%E7%AC%AC%E4%B9%9D%E9%80%B1%E4%B8%BB%E7%B7%9A%E4%BB%BB%E5%8B%99%E5%9C%96%E5%BA%AB/5n1uTFh.png?raw=true'
            alt='好組裝'
          />
          <p className='bedAdvantage-text'>好組裝</p>
        </li>
      </ul>
    </section>
  )
}

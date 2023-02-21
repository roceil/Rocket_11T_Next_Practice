

export function Transport() {
  return (
    <section className='transport' id='transport'>
      <h3 className='section-title'>運送方式</h3>
      <ul className='transport-intro'>
        <li className='transport-card'>
          <div className='cardImg'>
            <span className='material-icons'>shopping_cart</span>
          </div>
          <h4>STEP.1</h4>
          <p>選購商品</p>
        </li>
        <li className='transport-card'>
          <div className='cardImg'>
            <span className='material-icons'>format_list_bulleted</span>
          </div>
          <h4>STEP.2</h4>
          <p>填寫預定資料</p>
        </li>
        <li className='transport-card'>
          <div className='cardImg'>
            <span className='material-icons'>local_post_office</span>
          </div>
          <h4>STEP.3</h4>
          <p>預定成功</p>
        </li>
        <li className='transport-card'>
          <div className='cardImg'>
            <span className='material-icons'>done</span>
          </div>
          <h4>STEP.4</h4>
          <p>Email 付款資訊</p>
        </li>
      </ul>
    </section>
  );
}

import React from 'react'
import "./Singlepost.scss"
import Sidebar from '../../components/Sidebar/Sidebar'
import {images} from "../../constants"


const Singlepost = () => {
  return (
    <div className='Singlepost pt-5'>
        <div className="singlepost">
            <div className='singlepostWrapper'>
                <img className = 'singlepostimg' src={images.image3}/>
                <h1 className='singleposttitle'> laborum qui voluptas fugiat .
                    <div className="singlepostedit">
                        <i className="singlepostIcon bi bi-pen-fill"></i>
                        <i className="singlepostIcon bi bi-trash-fill"></i>
                    </div>
                </h1>
                <div className="singlepostinfo">
                    <span className='author'>Author:&nbsp;<b>Vyankatesh Bura</b></span>
                    <span className='Date'>1 hour ago</span>
                </div>
                <p className='singlePostDesc'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet reprehenderit maiores molestiae possimus enim voluptate iusto ad placeat atque at similique incidunt reiciendis, pariatur, qui debitis. Inventore obcaecati odit dolorem.
                    Ea facere maiores voluptas quam sit temporibus alias impedit sint porro? Culpa voluptas numquam vitae ipsum? Modi corporis eaque laborum rem eum et cupiditate. Saepe pariatur magnam reiciendis illum iste.
                    Consequatur dolor ad minima, similique quisquam natus labore doloremque ipsa saepe, commodi pariatur harum iusto. Exercitationem nulla voluptatum nemo officiis fugiat, temporibus, minima beatae molestias, dolores ipsam tenetur perferendis voluptate.
                    Facere et culpa fugit eum vitae suscipit! Quasi molestiae odio, consequatur placeat tempore repellendus ut animi? Ea, architecto laboriosam quia nulla, odit nemo culpa in similique voluptatem nostrum neque quam!
                    Magni reiciendis nam possimus? Facere mollitia suscipit aspernatur delectus dolor soluta cupiditate iure. Repellendus quod quo animi laudantium, culpa iure quis ad mollitia aliquam? Ex quisquam molestiae quidem saepe nostrum.
                    Unde expedita soluta sunt suscipit fuga quaerat et voluptate, in eaque molestiae iure eveniet delectus magni, adipisci amet commodi provident voluptatibus aspernatur. Error sed dolorem expedita, voluptate ipsa minima impedit?
                    Repellat deserunt, suscipit asperiores consequatur officia illo explicabo quasi quis distinctio molestiae necessitatibus ducimus animi, iste dolor esse voluptatibus nemo. Exercitationem praesentium dicta temporibus deserunt cupiditate beatae veniam nulla officia?
                    Doloremque iste porro odit ex, praesentium nesciunt repellendus eos, magnam fugit voluptatem sequi ipsum ut illum suscipit saepe, harum vel deserunt fugiat dolor earum quidem enim omnis. Minima, perspiciatis deserunt.
                    Autem expedita, accusantium minus odit, vel veritatis quia earum accusamus officia culpa odio id totam perferendis ratione vitae, ut nam. Maiores quia inventore delectus odio, facilis ipsam accusantium et. Ea.
                    Ut atque corporis illo libero aliquam rem delectus vero deserunt maiores! Quae fuga veritatis assumenda enim dolor alias non, placeat, soluta exercitationem repudiandae laudantium ex aspernatur corrupti quisquam sint quo.
                    Nemo at voluptatem porro molestias eligendi veritatis, rerum adipisci reiciendis omnis corporis? Unde alias molestias deleniti officia fugiat facere facilis harum. Ea ab sit, omnis quod a praesentium sed incidunt.
                    Quia dignissimos magnam officia molestias maiores iure asperiores corrupti autem repellendus, iusto similique est soluta provident et illo facilis libero quo dolores! Sint, rem amet eius voluptas quisquam doloremque cumque!
                    Dolores reiciendis qui distinctio dignissimos incidunt ipsum pariatur facilis, unde quas illo, officia nisi cum aut ea ipsam earum est fuga mollitia adipisci! Quia magni et incidunt. Neque, fugit porro?
                    Assumenda vel obcaecati aperiam doloremque amet earum maiores, consequuntur sint pariatur enim est libero deleniti nulla facere. Possimus provident earum doloremque minus nam praesentium quasi cum! Non laborum totam hic.
                    Delectus qui doloribus vel eum iste odio maxime nostrum expedita esse ratione, cumque vitae mollitia, natus corporis, necessitatibus et animi suscipit. Suscipit inventore soluta illo, itaque numquam similique voluptatum porro?
                    Aut sapiente earum voluptatem, corrupti laudantium quos voluptate quaerat, neque eaque accusamus omnis nam at voluptatum reprehenderit recusandae unde. Odio laboriosam, quasi blanditiis explicabo eos iste provident aspernatur libero in.
                    Non deleniti minus deserunt sunt quibusdam possimus, voluptas vitae aperiam, quisquam sint ducimus, quis neque modi dolorem quasi vel architecto odio adipisci quam dolor velit dicta suscipit impedit nisi? Autem.
                    Eos, corrupti? Maiores corporis architecto numquam libero commodi voluptate nisi, rerum eius quasi eveniet in qui doloribus ducimus dolorum sapiente quibusdam esse adipisci atque ipsa ipsam quia sint. Atque, distinctio!
                    Unde quod rerum voluptatibus reprehenderit ipsam ipsa nisi sint, officiis facere expedita pariatur dignissimos sit placeat assumenda ullam debitis laborum. Laudantium quam quaerat id delectus laboriosam magni rem reiciendis ratione.
                    Minus, facilis, rem commodi, accusamus temporibus officiis odio aliquam in nisi maxime eaque iste dicta error cupiditate id nemo? Architecto repellat vitae eaque, asperiores nisi ratione aperiam aspernatur ducimus ipsam.
                </p>
            </div>
        </div>
        <Sidebar/>
    </div>
  )
}

export default Singlepost
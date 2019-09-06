import React from "react";
import Card from "../components/Card"
import Header from "../components/Header";

function cardList() {
    return [
        {
            id: 0,
            name: 'La ruche qui dit oui',
            website: 'https://laruchequiditoui.fr/fr',
            image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAABkCAMAAAC8R1L8AAAAulBMVEX/////0ATewCL+6AD85gXewB369OFLAAD99aj/zgBHAABEAAD///zvyBb/2Vz/994/AACCYWRRABXZ0NDd1tf+55f/0yiIZ2uumJ07AAC2pKfkzGBcIitVDhvOxMX5+PhOAA51S1Dv7O2chYiPcHVhKzSVfH6jjZD+4QHn4eHcvQB7V1tXFyNsPES9rrDo1Hz/4If+66k0AAD87Ef86jL9333++tP++Mj++L3m0G3iyU/x5bH/1T4sAAAR6miIAAAEdElEQVRoge3bDXObNhgHcHlrogWyJAg2sIbQC8iUIrE1e+u69ft/rT0E3AQcnKQXhLvxv7ShMj3/TghJPh4jtGbNMJwvLXg0kZTZ0obHEhFyCq5w3FCl5qAtcn1pI4urUZOyJho1cZM67sLMY/kYIVM1amoEpq5EfXZMjztM6tFV49LUzkD797QiGTXVetSQCTHuwfkTkXH35MHolBo3zjj3of4TYyfzdm4ko8TF8dcT6/4qtnly3TnNdWnNmv9oLr+bzvsFWb9+O5m3F7+cJGuzWQp2/ttR1lKw8zdPsAD2u3vW9dMsiHPY81ibix9OkuUa9sdzWW5hf06rxiyXsA8vYbmDvZDlCvZiFsAcrJUf3kxnguUCdvnT2TeT+X7Ktbm6nBu2ulbX/9V19g7yiG/vumgzOHDiOvurPfj53ZSrm99/3G9Yr1bX6nqR6+PfkI+HA3/s2ly9h/xzKvfjvWvj9H6czKHrpObV1bW6Vpcb13P29wu5prPf5yxxHc+P5LrPeXvi9SBzs9asmTf7h3f3T/n6o/ZXd6j4/sS7P9xFIUouu2fDzefqkqKuY2hTtayUlAqp2EqKUCkTlMgcTqzrelw78PoJ+sftBSNl1yINYzhHyohI+UKhmsG/GxRDWy5ilAhDxPxlAQHpXDY1ce9iu4JhpVISKY+pyiNNTiQqCLgYuIim5fzP3/cukaa2d4mGW9LsXSH2UUjsA5edHXXvUp5Otdq74OoOXJmnF3KFOJB9OU7rqof9VZUJKkSJcuLa1eCyENneFRkwPXC1KVgRFl1/hQ6Kh3pXiWnZV5NIA/eARAcuY7CBeyNhKWbzT2C9K8AZxV05iUxZCpf0iMsjzlzWB4DsXCSRpDl0teO+G19qXPk0m4tjE9TGdC7R7GCMD8Y9bZa5HysvZSwlqnc1Yji+Mn+heSLDOo41CXtXiM3AFTL38yrLq0olokCoFk3vUoZVPGW0ISmvPBwmw3WooQ7WIcP8bZ7DgIKZ8+4WkBjWISDuCGTXFu9h5sH4Ev26TVKB51+3C2utLncp9ECi7yaKQINJJ4jDzBDDhFBJkoJ6p0tU6gJRDf/jiUqxVwjv0x32Lf0h7+vQFH/Q/Pn0NWuekSyHIZ9R+OEhbReYjDaw4Ylo1VBIO8SiMlEopAperyi8puj8G4rM92C9Lj7B/r1Ktu371cLH8BHjNtMeE5+AUfkYls7kNoLXsy18BFHbcWXr6yfGkbVqt4X9VZX4rSs2jdac3oQZzLYN9FfiNwWJ6E1EvSzzwMX9+eeJACOpB66AAK0CF4pu7iptS79KcPjAhfD8BbaPunZt94QonHKRpVziuMs4+Fz7Ja50XHp+Ii47/7cDvmh8WQf7nMdccHzU1cy/wQeXBdcNj43qXUzJVA1cUQkuP0xw73KwnyixNQGinjUWJTedi2Fo2YJre+fKfPhAyUNfa6Gy9ssD/Hb+eRUVqQZObmSEqG03+DsZlBw1OkKR7sZRmVoAJ+3fWTu0uC3nd8Hb5AffX1qz5qvKv/6EtQMPp8iFAAAAAElFTkSuQmCC'
        },
        {
            id: 1,
            name: 'Strasbourg Locavore',
            website: 'http://www.strasbourg-locavore.fr/',
            image: 'https://lh5.googleusercontent.com/p/AF1QipNUQmXZMVIalr4z-haAfTCfLWeUaGLlL1hmyigc=w160-h160-k-no'
        },
    ];
}

export default function Home(props) {

    let cards = cardList();
    let HomeStyle = {
        display: "flex"
    };

    return (
        <div>
            <Header/>
            <div style={HomeStyle}>
                {cards.map(card => (
                    <Card key={card.id} content={card}/>
                ))
                }
            </div>
        </div>
    );
}

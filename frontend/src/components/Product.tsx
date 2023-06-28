import { ProductProps } from "@/types/listTypes";
import { useQuery, gql } from "@apollo/client";
import Spinner from "@/components/Spinner";
import Title from "@/components/Title";
import ProductCard from "@/components/ProductCard";
import "@/styles/product.scss";

// Fetch data using Graphql
const ProductList = gql`
    query GetProductLists {
        productLists(pagination: {start: 0, limit: 20 }) {
            data {
                attributes {
                    name,
                    desc,
                    price,
                    altImg,
                    category,
                    img {
                        data {
                            attributes {
                                formats 
                            }
                        }
                    }
                }
            }
        }
    }
`

const Product = ({id, heading}: ProductProps) => {

  const { loading, error, data } = useQuery(ProductList);

  if (loading) return <Spinner />
  if (error) return <Spinner />

  return (
    <section className="product" id={id} >
        <Title heading={heading} />
        <div>
          {
            data.productLists.data.map((lists: any, key: number) => (
                <div key={key}>
                  <ProductCard data={lists} id={key} prodCategory={heading}/>
                </div>
            ))
          }
        </div>
    </section>
  )
}
export default Product
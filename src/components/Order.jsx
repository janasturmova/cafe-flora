
// export const Order = ({ items }) => {
//     return (
//         <main className="order">
//             <div className="container order__content">
               
//                 <h1>Vaše objedávnka</h1>
//                 <p className="empty-order">Zatím nemáte nic objednáno</p>
//                 <div className="order__items">
//                     {items.map(item => (
//                         <OrderItem
//                             key={item.id}
//                             name={item.name}
//                             image={`http://localhost:4000${item.image}`}
//                         />
//                     ))}
//                 </div>
//             </div>
//         </main>
//     );
// };

export const Order = ({ items }) => {
    return (
        <main className="order">
            <div className="container order__content">
                <h1>Vaše objedávnka</h1>
                {items.length === 0 ? ( 
                    <p className="empty-order">Zatím nemáte nic objednáno</p>
                ):(
                    <div className="order__items">
                    {items.map(item => (
                        <OrderItem
                            key={item.id}
                            name={item.name}
                            image={`http://localhost:4000${item.image}`}
                        />
                    ))}
                </div>
                )}
            </div>
        </main>
    );
};

const OrderItem = ({name, image}) => ( 
    <div className="order-item">
        <img
        src={image}
        className="order-item__image"
        />
        <div className="order-item__name">
            {name}
        </div>
    </div>
)





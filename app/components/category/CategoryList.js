import Image from 'next/image';

const categories = [
    {name: 'Furniture', imageUrl: '/images/furniture.png'},
    {name: 'Household', imageUrl: '/images/household.png'},
    {name: 'Electronics', imageUrl: '/images/technology.png'},
    {name: 'Clothing', imageUrl: '/images/clothes.png'},
    {name: 'Books & Media', imageUrl: '/images/booksMedia.png'},
    {name: 'Kids', imageUrl: '/images/kids.png'},
    {name: 'Sports', imageUrl: '/images/sports.png'},
    {name: 'Pet', imageUrl: '/images/pets.png'},
    {name: 'Miscellaneous', imageUrl: '/images/miscellaneous.png'}
  ]; 

const CategoryList = () => {
    return (
      <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap:"wrap", paddingTop: '20px' }}>
      {categories.map((category) =>(
        <button key={category.name} style={{ padding:'0.5rem 1rem', borderRadius:'2px'}}>
            <Image
              src={category.imageUrl}
              alt={category.name}
              width={80}
              height={80}
              />
              {category.name}
        </button>
      ))}
    </div>
    );
  };
export default CategoryList;
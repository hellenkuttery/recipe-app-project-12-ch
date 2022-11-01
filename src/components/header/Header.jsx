import {
  HeaderContainer,
  FormContainer,
  MainHeader,
  FoodInput,
  Button,
  Select,
} from "./Header.style";

const Header = ({ setQuery, setSelectedMeal, mealType, getData }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
  };
  return (
    <HeaderContainer>
      <MainHeader>Recipe App</MainHeader>
      <FormContainer onSubmit={handleSubmit}>
        <FoodInput
          type="text"
          placeholder="Search"
          // Buraya Kadar ekle sonra onChange de bir state ihtiyacım var onu hazırlamam gerekir mi önceden varmıydı.Ama headerda değil bunu ordan almalıyız.
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button type="submit"> SEARCH</Button>
        <Select
          name="mealType"
          id="mealType"
          onChange={(e) => setSelectedMeal(e.target.value)}
        >
          {mealType.map((meal, index) => (
            //Option tek satır o nednele { gerek yok süsülü olursa retun kullanmam gerekecekti
            <option key={index} value={meal.toLowerCase()}>
              {meal}
            </option>
          ))}
        </Select>
      </FormContainer>
    </HeaderContainer>
  );
};

export default Header;

import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import styles from './css-modules/cardStyles.module.css'

function App() {
  const data = [
    {
      id:'1',
      title: 'Learn Python:The Complete Python Programming Course',
      instructor: 'Avinash Jain, The Codex',
      image: 'https://img-b.udemycdn.com/course/240x135/394676_ce3d_5.jpg',
      stars:4,
      rating: 4.4,
      students:2982,
      price: 319.99,
      bestSeller: false,
    },
    {
      id:'2',
      title: 'Learn Python for Data Analysis and Visualization',
      instructor: 'Jose Portilla',
      image: 'https://img-b.udemycdn.com/course/240x135/396876_cc92_7.jpg',
      stars:4,
      rating: 4.4,
      students:18017,
      price: 319.99,
      bestSeller: true,
    },
    {
      id:'3',
      title: 'Python for Beginners - Learn Python from scratch',
      instructor: 'Edwin Diaz, Coding Faculty Solutions',
      image: 'https://img-b.udemycdn.com/course/240x135/405878_e5a0_3.jpg',
      stars:4,
      rating: 4.4,
      students:1798,
      price: 269.99,
      bestSeller: false,
    },
    {
      id:'4',
      title: 'Learn Python: Python for Beginners',
      instructor: 'Abrar Hussain',
      image: 'https://img-b.udemycdn.com/course/240x135/426570_1b91_3.jpg',
      stars:4,
      rating: 4.3,
      students:2774,
      price: 269.99,
      bestSeller: false,
    },
    {
      id:'5',
      title: 'Python Beyond the Basics - Object-Oriented Programming',
      instructor: 'Infinite Skills',
      image: 'https://img-b.udemycdn.com/course/240x135/449532_2aa9_7.jpg',
      stars:4,
      rating: 4.3,
      students:2935,
      price: 269.99,
      bestSeller: false,
    }
  ];
  const cardList = data.map(piece => <Card key={piece.id} data={piece}/>)
  
  return (
    <div className="App">
      <section className={styles.selectedCourses}>
       <h3>Expand your Career opportunities with Python</h3>
            <p>Take one of Udemy`s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to both beginners and advanced developers alike.</p>
            <button className={styles.explore}>Explore Python</button>
            <section className={styles.cards}>
              {cardList}
            </section>
      </section>   
    </div>
  );
}

export default App;

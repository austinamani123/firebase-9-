// import the functions you need from the SDK's you need
import { initializeApp } from 'firebase/app';
import './style.css';
import { getDocs, getFirestore, collection } from 'firebase/firestore';

// the web app's firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBRCTNbGahQwFdGMehh-_TLXpiJbSjMAOU',
	authDomain: 'fir-9-dojo-272d5.firebaseapp.com',
	projectId: 'fir-9-dojo-272d5',
	storageBucket: 'fir-9-dojo-272d5.appspot.com',
	messagingSenderId: '499715572872',
	appId: '1:499715572872:web:5774d2b4717fec53f00b3d',
};

// initialize firebase app
initializeApp(firebaseConfig);

// init services
const db = getFirestore();

// collection ref
const colRef = collection(db, 'books');

// get collection data
getDocs(colRef)
	.then((snapshot) => {
		let books = [];
		snapshot.docs.forEach((doc) => {
			books.push({ ...doc.data(), id: doc.id });
		});
		console.log(books);
	})
	.catch((err) => {
		console.log(err.message);
	});

import { ICategory } from '../models/category';
import { CategoryActions, GET_CATEGORIES, UPDATE_VIEWS, SET_PRODUCTS } from '../actions/category.actions';

const cats = [
    { 
        "id": "92ns9nd9asda9n",
        "name": "Books",
        "views": 0,
        "products": [
            {
                "id": "8938nns9h9shs",
                "image": "https://images-na.ssl-images-amazon.com/images/I/5164bZIrqLL._SX396_BO1,204,203,200_.jpg",
                "name": "RxJS in Action" 
            },
            {
                "id": "849dndni3sffs",
                "image": "https://images-na.ssl-images-amazon.com/images/I/51SRFX--KdL._SX260_.jpg",
                "name": "Angular 5: From Theory To Practice" 
            },
            {
                "id": "849dndni3sfbs",
                "image": "https://images-na.ssl-images-amazon.com/images/I/51iXdqUbXlL._SX397_BO1,204,203,200_.jpg",
                "name": "Redux in Action" 
            },
            {
                "id": "849dndweisfbs",
                "image": "https://images-na.ssl-images-amazon.com/images/I/41CYiZ9gi-L._SX404_BO1,204,203,200_.jpg",
                "name": "Swift 4 Programming Cookbook" 
            }
        ]
    },
    { 
        "id": "8kjn48ebs8dd8s",
        "name": "Sport",
        "views": 0,
        "products": [
            {
                "id": "3238nns9h9shs",
                "image": "https://m.media-amazon.com/images/I/91r8TF05ItL._AC_UL320_.jpg",
                "name": "Spalding TF250 Men's" 
            },
            {
                "id": "3238nfgs9h9shs",
                "image": "https://images-na.ssl-images-amazon.com/images/I/41qqjsntmAL._SY434_BO1,204,203,200_.jpg",
                "name": "PRESCHOOL UA BPS CURRY" 
            },
            {
                "id": "3238nfg97s9shs",
                "image": "https://m.media-amazon.com/images/I/A1gayeAwQuL._AC_UL436_.jpg",
                "name": "Brazilian Jiu Jitsu Uniform" 
            }
            
        ]
    },
    { 
        "id": "748dbnd8b3389d",
        "name": "Traveling",
        "views": 0,
        "products": [
            {
                "id": "45343fns9h9shs",
                "image": "https://images-na.ssl-images-amazon.com/images/I/A1YcqYk2bML._AC_SR201,266_.jpg",
                "name": "Lenovo Legion Armored" 
            }
        ]
    }
];


export default function categoryReducer(
  state: ICategory[] = [],
  action: CategoryActions) {

  switch (action.type) {
      case GET_CATEGORIES:
        return [...cats];

      case UPDATE_VIEWS:
            const ind = state.indexOf(action.payload);
            const vals = [...state];
            vals[ind].views = vals[ind].views + 1;
            return vals;
    case SET_PRODUCTS:
            const ix = state.findIndex(x => x.id === action.payload.id);
            const oldArr = [...state];
            oldArr[ix].products = action.payload.products;
            return oldArr;

      default:
          return state;
  }
}
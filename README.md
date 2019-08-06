# react forms lesson

### Pro tip!

`create-react-app` 

# This HW continues the in-class lab

0. Review the lesson

1. Review lab item 1

2. Review lab item 2

3. Complete lab item 3

4. Create functionality to edit puppies already on the list

5. Bonus: try lab bonus 4

6. try some css

7. Bonus: try lab bonus 5


# react-form-lab

Using the application we just created you are going to build out the ```MainContainer```.

To Start: Create a branch on the App we just created called ```dog-dev```


1.  Create a component inside of ```MainContainer``` that will be a form (call it DogForm), that has three inputs that will take in the name, age and breed of a dog, and when submitted, will store the values as an object in an array in state called ```dogs```.  (Think about where you want to actually store this state? Do you want to store it in the component you are creating or inside of ```MainContainer```, or both, Note: You MAY HAVE TO REFACTOR YOUR CODE DOING THIS, THATS OKAY). Remember data flows down on every render.  Also think about when you want to push the object into state? (Do you want to do it when the form submits?)

2.  You are then going to create another component called ```PuppyList``` that renders all the dogs you create from your form in the component you just made, the component will be rendered by ```MainContainer```, (What props do you need to pass to this component?).  Note you want to display all the of the properties of each dog, so the age, name, and breed


** BONUS ** 


3.  Try to create functionality to delete puppies from your list

4.  Create functionality that will give a certain background color to dogs above or below a certain age for example, (age <= 5 background = 'purple',or  age > 5 age < 10 background = 'red'.  Note this is just logic, not actual code.

5.  Create logout functionality on the app that will switch from the ```MainContainer``` back to the ```Login``` component.
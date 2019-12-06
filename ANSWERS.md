- [ ] Why would you use class component over function components (removing hooks from the question)?
    Typically as a developer, we would want to use function components. The main reason to use class components is to know how to work with legacy code and to keep code uniform. We want to use class components when state is being changed. It also gives us access to the component lifecycle.


- [ ] Name three lifecycle methods and their purposes.
    Mounting- The mounting phase is where we build the component. We state the initial data in the constructor or state phase. This is where render method is invoked and where the componentDidMount would get called.
    Updating- This is where our data starts to change, and setState is used. When the setState is used, the state is rerendered. ComponentdidUpdate happens during the update.
    Unmounting- This is when we are done with using our component and we want to clear it from the screen. componentwillUnmount is called and clean up happens.

- [ ] What is the purpose of a custom hook? Custom hooks help us keep our code DRY and also help us keep stateful logic. We can use these hooks over and over again among our code

- [ ] Why is it important to test our apps?
    We are human, we make mistakes. Our eyes see what we want them to sometimems. Running tests helps to take the human error out of our code. Testing may seem cumbersome, but in the long run it is better for us to solve issues now, rather than have an end point user encounter issues. This could be very costly to our company as well as cause bad publicity. It makes us think of edge cases, acts as documentation, allows us to trust code. 
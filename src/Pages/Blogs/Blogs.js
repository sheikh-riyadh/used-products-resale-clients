import React from 'react';
import react_state from '../../assets/react_state.png'
import inheritance from '../../assets/inheritance.jpeg'
import unit_test from '../../assets/unit testing.png'
import react from '../../assets/react.png'

const Blogs = () => {
    return (
        <div className='lg:w-9/12 mx-auto py-10'>
            <h2 className='my-5 text-3xl lg:text-5xl font-bold uppercase'>Blogs</h2>
            <div>
                <div className="divider before:bg-primary after:bg-secondary mx-auto w-2/12 m-0 p-0"></div>
                <div className="divider before:bg-primary after:bg-secondary mx-auto w-1/12 m-0 p-0"></div>
            </div>
            <div className='text-start my-5 lg:my-16'>
                <img src={react_state} alt="react_state" />
                <div className='p-5 text-start'>
                    <h2 className='text-3xl font-medium'> What are the different ways to manage a state in a React application?</h2>
                    <p className='text-xl'>1. Local state</p>
                    <p className='text-xl'>2. Global state</p>
                    <p className='text-xl'>3. Server state</p>
                    <p className='text-xl'>4. URL state</p>
                    <p><strong>Local state</strong> – Local state is data we manage in one or another component.
                        Local state is most often managed in React using the useState hook.
                        For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs.</p>
                    <p><strong> Global state</strong> – Global state is data we manage across multiple components.
                        Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.</p>
                    <p><strong>Server state</strong> – Data that comes from an external server that must be integrated with our UI state.
                        Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.
                        There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state.</p>
                    <p><strong>URL state</strong> – Data that exists on our URLs, including the pathname and query parameters.
                        URL state is often missing as a category of state, but it is an important one.
                        In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!</p>
                </div>
            </div>
            <div className='text-start my-5 lg:my-16'>
                <img className='w-full' src={inheritance} alt="inheritance" />
                <p className='text-3xl font-medium'>How does prototypical inheritance work?</p>
                <p className='my-2'>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the Prototype of an object, we use Object. getPrototypeOf and Object.</p>
            </div>
            <div className='text-start my-5 lg:my-16'>
                <img className='w-full' src={unit_test} alt="unit_test" />
                <p className='text-3xl font-medium'>What is a unit test? Why should we write unit tests?</p>
                <p className='my-2'>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
            </div>
            <div className='text-start my-5 lg:my-16'>
                <img className='w-full' src={react} alt="react" />
                <p className='text-3xl font-medium'>React vs. Angular vs. Vue?</p>
                <p><strong>React</strong> can be used as a UI library to render elements, without enforcing a specific project structure, and that’s why it’s not strictly a framework.</p>
                <p>React Elements are the smallest building blocks of React apps. They are more powerful than DOM elements because the React DOM makes sure to update them efficiently whenever something changes.</p>
                <p>Anything you create with JSX could also be created with the React JavaScript API, but most developers prefer JSX because it’s more intuitive.</p>
                <p className='my-2'><strong>Vue.js</strong>The Vue.js core library focuses on the View layer only. It’s called a progressive framework because you can extend its functionality with official and third-party packages, such as Vue Router or Vuex, to turn it into an actual framework.</p>
                <p className='my-2'>Although Vue is not strictly associated with the MVVM (Model-View-ViewModel) pattern, its design was partly inspired by it. With Vue, you’ll be working mostly on the ViewModel layer, to make sure that the application data is processed in a way that allows the framework to render an up-to-date View.</p>
                <p className='my-2'>Components in Vue are small, self-contained, and can be reused throughout the application. Single File Components (SFCs) with the .vue extension contain HTML, CSS, and JavaScript so that all relevant code resides in one file.</p>
                <p className='my-2'><strong>Angular</strong> In this article, I’m discussing Angular 2, and not the first version of the framework which is now known as AngularJS.</p>
                <p className='my-2'>AngularJS, the original framework, is an MVC Model-View-Controller framework. But in Angular 2, there’s no strict association with MV*-patterns as it is also component-based..</p>
            </div>
            <div className='text-start my-5 lg:my-16'>
                <h1 className='my-5 text-3xl font-medium'>Popularity</h1>
                <p><strong>React</strong> React is one of the most popular JavaScript projects with 160k stars on GitHub. It’s developed and maintained by Facebook, and it’s used internally in many of their projects. Additionally, it powers over 2 million websites, according to BuiltWith‘s usage statistics.</p>
                <p className='my5'><strong>Vue</strong> Out of the three frameworks, Vue has the most stars on GitHub, with 176k stars. The project is developed and led by ex-Googler Evan You. It’s a very strong, independent project in the open-source community and is used by over 1 million websites, according to BuiltWith.</p>

                <p className='my5'><strong>Angular</strong> Angular is developed by Google, but surprisingly it’s not used in some of their flagship products such as Search or Youtube. It’s often used in enterprise projects, and it powers over 97,000 websites based on BuiltWith‘s data.
                    <br />
                    It’s the least starred among the three frameworks, with 68k stars on GitHub. However, when switching from Angular 1 to Angular 2, they created an entirely new repository instead of continuing the AngularJS project, which also has 59k stars.
                </p>
            </div>
        </div>
    );
};

export default Blogs;
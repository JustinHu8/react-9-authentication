// // 1. Introducing TypeScript in React

// interface Course {
//     title: string;
//     description: string;
//     duration: string;
//     isFree: boolean;
//     teachers: string[];
// }

// const CourseCard = ({ course }: { course: Course }) => {
//     // Using destructing
//     const { title, description, duration, isFree, teachers } = course;

//     return (
//         <div>
//             <h2>{title}</h2>
//             <p>{description}</p>
//             <p>Duration: {duration}</p>
//             <p>{isFree ? "This course is Free!" : "Paid course"}</p>
//             <h3>Teachers:</h3>
//             <ul>
//                 {teachers.map((teacher: string) => (
//                     <li key={teacher}>{teacher}</li>
//                 ))}
//             </ul>
//         </div>
//     )
// }

// export default CourseCard;

// // 2. Write the same component using TypeScript types

// type Course = {
//     title: string;
//     description: string;
//     duration: string;
//     isFree: boolean;
//     teachers: string[];
// }

// type CourseCardProps = {
//     course: Course;
// }

// const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
//     const { title, description, duration, isFree, teachers } = course;

//     return (
//         <div>
//             <h2>{title}</h2>
//             <p>{description}</p>
//             <p>Duration: {duration}</p>
//             <p>{isFree ? "This course is Free!" : "Paid course"}</p>
//             <h3>Teachers:</h3>
//             <ul>
//                 {teachers.map((teacher: string) => (
//                     <li key={teacher}>{teacher}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default CourseCard;

// // 3. Introducing state
// // useState Hook syntax and format - [isEnrolled, setIsEnrolled] = useState(false)
// // Switch analogy - isEnrolled ? "Unenroll" : "Enroll Now"
// // Using TypeScript with useState
// // useState<boolean>(false) - Pay attention to the type annotation


// import React, { useState } from 'react';

// type Course = {
//     title: string;
//     description: string;
//     duration: string;
//     isFree: boolean;
//     teachers: string[];
// }

// type CourseCardProps = {
//     course: Course;
// }

// const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
//     const { title, description, duration, isFree, teachers } = course;
//     const [isEnrolled, setIsEnrolled] = useState<boolean>(false);
//     const [isLiked, setIsLiked] = useState<boolean>(false);

//     return (
//         <div>
//             <h2>{title}</h2>
//             <p>{description}</p>
//             <p>Duration: {duration}</p>
//             <p>{isFree ? "This course is Free!" : "Paid course"}</p>
//             <h3>Teachers:</h3>
//             <ul>
//                 {teachers.map((teacher: string) => (
//                     <li key={teacher}>{teacher}</li>
//                 ))}
//             </ul>
//             <button onClick={() => setIsEnrolled(!isEnrolled)}>
//                 {isEnrolled ? "Unenroll" : "Enroll Now"}
//             </button>
//             <button onClick={() => setIsLiked(!isLiked)}>
//                 {isLiked ? "Unlike" : "Like"}
//             </button>
//         </div>
//     );
// };

// export default CourseCard;


// // 4. Rewrite using Event Handler

// import React, { useState } from 'react';

// type Course = {
//     title: string;
//     description: string;
//     duration: string;
//     isFree: boolean;
//     teachers: string[];
// }

// type CourseCardProps = {
//     course: Course;
// }

// const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
//     const { title, description, duration, isFree, teachers } = course;
//     const [isEnrolled, setIsEnrolled] = useState<boolean>(false);
//     const [isLiked, setIsLiked] = useState<boolean>(false);

//     const handleEnroll = () => {
//         setIsEnrolled(!isEnrolled);
//         console.log('Handle Enroll', isEnrolled); // This logs the old value, not the updated one 
//         // state changes don’t immediately reflect in the same render cycle.
//     }

//     const handleLike = () => {
//         setIsLiked(!isLiked);
//     }

//     return (
//         <div>
//             <h2>{title}</h2>
//             <p>{description}</p>
//             <p>Duration: {duration}</p>
//             <p>{isFree ? "This course is Free!" : "Paid course"}</p>
//             <h3>Teachers:</h3>
//             <ul>
//                 {teachers.map((teacher: string) => (
//                     <li key={teacher}>{teacher}</li>
//                 ))}
//             </ul>
//             <button onClick={handleEnroll}>
//                 {isEnrolled ? "Unenroll" : "Enroll Now"}
//             </button>
//             <button onClick={handleLike}>
//                 {isLiked ? "Unlike" : "Like"}
//             </button>
//         </div>
//     );
// };

// export default CourseCard;

// // 5. Complex State Object
// // Instead of tracking isEnrolled, liked, progress, and rating as separate pieces of state, they are bundled into a single object (userCourseStatus).
// // This allows for centralized management
// // Functional updates are used to update the state based on the previous state
// // use the spread operator (...prevStatus)
// // Do not mutate state directly!!

// // common mistake - mutating the state directly
// // Incorrect - userCourseStatus.isEnrolled = true;
// // Incorrect - setUserCourseStatus(userCourseStatus);

// // common mistake - Overwriting the whole object
// // Incorrect - setUserCourseStatus({ isEnrolled: true });

// // Correct - use the spread operator to preserve the previous state
// // setUserCourseStatus(prevStatus => ({ ...prevStatus, isEnrolled: true }));

// import React, { useState } from 'react';

// type Course = {
//     title: string;
//     description: string;
//     duration: string;
//     isFree: boolean;
//     teachers: string[];
// }

// type CourseCardProps = {
//     course: Course;
// }

// interface UserCourseStatus {
//     isEnrolled: boolean;
//     isLiked: boolean;
//     progress: number;
//     rating: number | null;
// }

// const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
//     const { title, description, duration, isFree, teachers } = course;

//     const [userCourseStatus, setUserCourseStatus] = useState<UserCourseStatus>({
//         isEnrolled: false,
//         isLiked: false,
//         progress: 0,
//         rating: null
//     });

//     // Toggle enrollment status
//     const toggleEnrollment = () => {
//         setUserCourseStatus(prevStatus => ({
//             ...prevStatus,
//             isEnrolled: !prevStatus.isEnrolled
//         }));
//     };

//     // Toggle liked status
//     const toggleLike = () => {
//         setUserCourseStatus(prevStatus => ({
//             ...prevStatus,
//             isLiked: !prevStatus.isLiked
//         }));
//     };

//     // Update progress
//     const updateProgress = (progress: number) => {
//         setUserCourseStatus(prevStatus => ({
//             ...prevStatus,
//             progress
//         }));
//     };

//     // Set rating
//     const setRating = (rating: number) => {
//         setUserCourseStatus(prevStatus => ({
//             ...prevStatus,
//             rating
//         }));
//     };

//     return (
//         <div>
//             <h2>{title}</h2>
//             <p>{description}</p>
//             <p>Duration: {duration}</p>
//             <p>{isFree ? "This course is Free!" : "Paid course"}</p>
//             <h3>Teachers:</h3>
//             <ul>
//                 {teachers.map((teacher: string) => (
//                     <li key={teacher}>{teacher}</li>
//                 ))}
//             </ul>
//             <button onClick={toggleEnrollment}>
//                 {userCourseStatus.isEnrolled ? "Unenroll" : "Enroll Now"}
//             </button>
//             <button onClick={toggleLike}>
//                 {userCourseStatus.isLiked ? "Unlike" : "Like"}
//             </button>

//             {/* Progress */}
//             <div>
//                 <label>Progress: </label>
//                 <input 
//                     type="number" 
//                     value={userCourseStatus.progress} 
//                     onChange={(e) => updateProgress(Number(e.target.value))} 
//                     max="100"
//                     min="0"
//                 />
//             </div>

//             {/* Rating */}
//             <div>
//                 <label>Rate the course: </label>
//                 {[1, 2, 3, 4, 5].map(ratingValue => (
//                     <button 
//                         key={ratingValue}
//                         onClick={() => setRating(ratingValue)}
//                         style={{ 
//                             fontWeight: userCourseStatus.rating === ratingValue ? 'bold' : 'normal' 
//                         }}
//                     >
//                         {ratingValue}
//                     </button>
//                 ))}
//             </div>

//             <p>Current rating: {userCourseStatus.rating || "Not rated yet"}</p>
//         </div>
//     );
// };

// export default CourseCard;


// 6. Event handling 
// Most common types of events 
// Mouse Events: onClick, onMouseEnter, onMouseLeave, onMouseOver, onMouseOut, onMouseDown, onMouseUp
// Form/Input Events: onChange, onSubmit, onFocus, onBlur
// Keyboard Events: onKeyDown, onKeyPress, onKeyUp

// Typing Event Handlers in TypeScript
// React.MouseEvent, React.ChangeEvent, React.FormEvent, React.KeyboardEvent

// Common mistakes 
// Not typing the Event correctly - e.g (event: any)
// Assuming Event Targets are always correctly typed
// e.g. buttons don't have a value property, but inputs do
// Not preventing default behavior when needed
// e.g. form submission
// const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault(); // Correct
// };

import React, { useState } from 'react';

type Course = {
    title: string;
    description: string;
    duration: string;
    isFree: boolean;
    teachers: string[];
}

type CourseCardProps = {
    course: Course;
}


const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
    const { title, description, duration, isFree, teachers } = course;
    const [inputValue, setInputValue] = useState<string>('');

    // Handling input change
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    // Handling button click
    const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log('Button clicked:', event);
    };

    return (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>Duration: {duration}</p>
            <p>{isFree ? "This course is Free!" : "Paid course"}</p>
            <h3>Teachers:</h3>
            <ul>
                {teachers.map((teacher: string) => (
                    <li key={teacher}>{teacher}</li>
                ))}
            </ul>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Type something..."
            />
            <p>Input value: {inputValue}</p>
            <button onClick={handleButtonClick}>
                Submit
            </button>
        </div>
    );
};

export default CourseCard;
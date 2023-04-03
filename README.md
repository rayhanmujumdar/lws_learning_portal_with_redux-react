# Final_exam_learning_portal_application

**Agenda:**

- functional requirement analysis
- create an **SRS (software requirement analysis)**
- choose technology
- setup project

# Functional requirement:

- প্রোজেকটি রিয়াক্ট এ কনভার্ট করে নিয়ে, এডমিন এর লগিন এবং লগআউট এর ফিচার ইমপ্লিমেন্ট করতে হবে। - Done
    - • প্রথম অবস্থায় Index পেজ হিসেবে থাকবে Student Login পেজ। - done
    - • Admin পেজ এর জন্যে admin রাউট ব্যবহার করতে হবে। যেমনঃ /admin, /admin/assignment - done
- Student Login, Student Registration ইমপ্লিমেন্ট করতে হবে আপনাদের। Template দিয়ে দেয়া আছে। Admin এর জন্য কোন registration প্রয়োজন নেই। কারণ আমরা admin তৈরী করে দিয়েছি। আপনাদের কে শুধু admin login implement করতে হবে। - done
- Dashboard এ Videos, Assignment, Quizzes এবং Assignment মার্ক এর জন্যে আলাদা পেজ তৈরি করতে হবে। নাম এবং টেমপ্লেটে দেয়া ইউজার ইন্টারফেস দেখে আশা করি বুঝে গেছেন কি করতে হবে। - done
- Dashboard এর Videos পেজে গেলে - done
    - পূর্বে এড করা ভিডিও গুলো লিস্ট আকারে আসবে
    - প্রত্যেকটি ভিডিওতে ডিলিট এবং এডিট বাটন থাকবে।
    - "Add Video" বাটনে ক্লিক করলে পপ-আপ বা অন্য পেজে নিয়ে গিয়ে ভিডিও এর Information গুলো কালেক্ট করতে হবে। উল্লেখ্য, আমরা আপনাদেরকে "Add Video" এর ইন্টারফেস দিয়ে দেইনাই, এটি আপনাকে নিজেকে করে নিতে হবে।
    - ভিডিও এড করতে কি কি প্যারামিটার ব্যবহার করবেন, সেটি ডেটাবেজের 'videos' টেবিল থেকে বুঝে নিন।
- Assignment পেজে গেলে - done
    - যদি Assignment তৈরি করা থাকে তবে লিস্টে দেখাবে, অন্যথায় ফাঁকা দেখাবে
    - "Add Assignment" - এ ক্লিক করার পরের ইন্টারফেস আপনাকে হ্যান্ডেল করতে হবে
    - এখানে বাড়তি একটি ফিল্ড দিতে হবে, Assignment টা কোন ভিডিওতে থাকবে সেটি সিলেক্ট করার অপশন দিতে হবে।
    - অন্যান্য প্রোপার্টি এবং ডেটা স্ট্রাকচার বোঝার জন্যে, 'assignments' টেবিল টি দেখে নিন।
- ধরুন, আপনি "Videos" এ একটি ভিডিও এড করলেন যার টাইটেল - "Debounce Function in JavaScript"। এখন এসাইনমেন্ট তৈরি করার সময় আপনি একটি Select Option দিবেন, যেখানে আগে এড করা ভিডিও গুলো থাকবে, তার মধ্যে যেটি সিলেক্ট করা হবে, এই এসাইনমেন্ট টি সেই ভিডিও এর নিচে দেখাবে। - done
- Quizzes পেজে গেলে, একই ভাবে, কুইজের লিস্ট থাকবে, এবং কুইজ এড করতে পারবেন। এড করার সময় কোন ভিডিওর কুইজ এড করছেন, সেটিও Select করে দেয়ার অপশন দিতে হবে। কুইজের ইনপুট নেবার আগে, JSON Server এ দেয়া Data Structure ভাল করে বুঝে নিন। - done
- AssignmentMark পেজে গেলে, Student-রা যেই যেই এসাইনমেন্ট জমা দিয়েছে, তার ডেটা টেবিলের মধ্যে দেখাবে। টেবিলে প্রথম অবস্থায়, মার্ক Input দেয়ার জায়গা থাকবে, মার্ক Input দিয়ে পাশের সবুজ টিক এ ক্লিক করলে, মার্ক আপডেট হয়ে যাবে এবং Input & সবুজ টিক এর পরিবর্তে শুধু কত মার্ক পেলো সেটি দেখা যাবে। - done
- টেবিলের উপরে ছোট ৩ টা ব্যাজ আছে, প্রথম ব্যাজে মোট এসাইনমেন্ট এর সংখ্যা বসাতে হবে, Pending এ কত গুলো এসাইনমেন্ট মার্কিং করা বাকি আছে সেটি থাকবে এবং Mark Sent এ কত গুলো মার্ক Sent করা হয়েছে সেটি থাকবে। - done
- Student এর লগিন রেজিস্ট্রেশন ফিচার Implement করতে হবে। স্টুডেন্ট লগিন করার পরে, Course Player পেজে নিয়ে যাবে। - done
- এডমিন ড্যাশবোর্ড থেকে যেই ভিডিও গুলো এড করেছেন, সেই ভিডিও গুলো ডান পাশের Playlist এ নিয়ে এসে দেখাতে হবে। লিস্টের ভিডিও তে ক্লিক করলে ওই ভিডিও প্লে করাতে হবে। - done
- যেই ভিডিও সিলেক্ট করা আছে, সেটিতে যদি এসাইনমেন্ট থাকে তাহলে, তাহলে এসাইনমেন্ট বাটন Show করবে। -done
    - এসাইনমেন্ট বাটন এ সেখানে ক্লিক করলে একটি Modal ওপেন হবে।
    - মোডালে কি কি ফিল্ড প্রয়োজন সেগুলোর জন্যে আপনি ডেটাবেজের Structure দেখে নিন।
    - একজন Student একবার Assginment সাবমিট করলে, পরবর্তিতে আর করতে পারবে না।
- এসাইনমেন্ট এর মতো, "কুইজে অংশগ্রহণ করুন" এ ক্লিক করলে, কুইজ পেজে নিয়ে যাবে, সেখানে ওই ভিডিও এর কুইজ গুলো নিয়ে এসে দেখাবে। - done
    - কুইজ সাবমিট করলে সেটি ক্যাল্কুলেট হয়ে মার্ক লিডারবোর্ডে চলে যাবে।
    - কুইজ সাবমিট করলে তাকে লিডারবোর্ডে নিয়ে যাবে।
    - একজন Student একবার Quiz সাবমিট করলে, পরবর্তিতে আর করতে পারবে না
- লিডারবোর্ড এ ক্লিক করলে, লগিন করা ব্যাক্তি তার নিজের রেজাল্ট এবং সর্বোচ্চ মার্ক পাওয়া ২০ জনের রেজাল্ট দেখতে পারবে। এটির জন্যে 'assignmentMark' এবং 'quizMark' টেবিল থেকে Runtime এ ফ্রন্ট এন্ড এই মার্ক ক্যাল্কুলেট করে নিয়ে এসে দেখাতে হবে। সার্ভার থেকে ক্যাল্কুলেট করার প্রয়োজন নেই। - done

# Requirement Analysis:

### Authentication:

**role**: student / admin 

1. admin login to go admin route
2. student login to go student route

************Admin:************

**Login**: go to admin route 

- Email → input
- Password → input

**Dashboard: - section name**

- Video → video section implementation
    - Show all video to page
    - Add video
    - Edit Video
    - Delete Video
- Assignment → assignment section implementation
    - Show all Assignment to page
    - Add Assignment
    - Edit assignment
    - delete Assignment
- Quizzes → quizzes section implementation
    - Show all quizzes to page
    - Add quiz
    - Edit Quiz
    - delete quiz
- Assignment Mark
    - show status to assignment mark
    - get all submitted assignment
    - mark all down assignment

****************Student:****************

**Route:**

**Login**: Go to the student route

- Email → input
- Password → input

**register**: - only student can register account

- student Name
- Email
- password
- confirm password

**course-video**: All videos can be uploaded to the server and displayed.

**description**: Show a single video description in this section. There are two routes.

- Assignment
- Quiz

**Assignment**: Students can submit the link to their assignments on Git by using the pop-up modal.

**Quiz**: This section contains a quiz related to video content. Students can answer the quiz questions and receive marks.

Leaderboard: The leaderboard section displays the sum of each student's quiz and assignment marks, along with their rank.

# Choose technology:

- React
- React-redux
- Redux-toolkit
- Redux-toolkit query
- React-router-dom
- tailwind-css
- date-fns
- daisyui

# Deploy:

- **GitHub link: - [https://github.com/Learn-with-Sumit/batch-2---final-exam---edtech-platform-rayhanmujumdar/tree/main](https://github.com/Learn-with-Sumit/batch-2---final-exam---edtech-platform-rayhanmujumdar/tree/main)**
- **Live Link: - [https://lively-kringle-812204.netlify.app/](https://lively-kringle-812204.netlify.app/)**
import React from "react";

const commentsData = [
    {
        name: "Pragyan Satapathy",
        text: "Reference site about Lorem Ipsum, giving information on its origins, as well as a random",
        replies: [
            {
                name: "Pragyan Satapathy",
                text: "Reference site about Lorem Ipsum, giving information on its origins, as well as a random",
                replies: [
                    {
                        name: "Pragyan Satapathy",
                        text: "Reference site about Lorem Ipsum, giving information on its origins, as well as a random",
                    },
                    {
                        name: "Pragyan Satapathy",
                        text: "Reference site about Lorem Ipsum, giving information on its origins, as well as a random",
                    },
                    {
                        name: "Pragyan Satapathy",
                        text: "Reference site about Lorem Ipsum, giving information on its origins, as well as a random",
                    }

                ]
            },
            {
                name: "Pragyan Satapathy",
                text: "Reference site about Lorem Ipsum, giving information on its origins, as well as a random",
            },
            {
                name: "Pragyan Satapathy",
                text: "Reference site about Lorem Ipsum, giving information on its origins, as well as a random",
            }

        ]
    },
    {
        name: "Pragyan Satapathy",
        text: "Reference site about Lorem Ipsum, giving information on its origins, as well as a random",
    },
    {
        name: "Pragyan Satapathy",
        text: "Reference site about Lorem Ipsum, giving information on its origins, as well as a random",
    },
    {
        name: "Pragyan Satapathy",
        text: "Reference site about Lorem Ipsum, giving information on its origins, as well as a random",
    },
];

const CommentsList = ({ comments }) => {
    return comments?.map((comment, index) => (
        <div key={index}>
            <Comment data={comment} />
            <div className='pl-5 ml-5 border-l-black'>
                <CommentsList comments={comment?.replies} />
            </div>
        </div>
    ))
}

const Comment = ({ data }) => {
    const { name, text } = data;
    return (
        <div className='flex items-center'>
            <div className='m-3'>
                <img className='h-8 rounded-full' alt='user' src='https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png' />
            </div>
            <div>
                <p className='font-semibold text-xs'>{name}</p>
                <p className='text-sm'>{text}</p>
            </div>
        </div>
    )
}

const CommentsContainer = () => {
    return (
        <div>
            <h1 className="text-lg font-medium mb-2">Comments</h1>
            <CommentsList comments={commentsData} />
        </div>
    );
};

export default CommentsContainer;
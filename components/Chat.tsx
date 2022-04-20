interface Props {
  chat: string;
}

const Chat: React.FC<Props> = ({ chat }) => {
  
  return (
      <div className="overflow-y-auto py-2 w-80 h-40 md:h-80 rounded-sm chat">
        <p className="text-ellipsis justify-self-end px-4 py-2 ml-8 my-4 mr-4 rounded-md bg-green-200 text-sm font-medium text-gray-800 drop-shadow-md">
          {chat}
        </p>
      </div>
  )
}

export default Chat

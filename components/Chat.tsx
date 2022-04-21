interface Props {
  responses: any[];
}

const Chat: React.FC<Props> = ({ responses }) => {
  
  return (
    <div className="mt-4 w-80">
      <p className="text-center rounded-t-md py-1 bg-slate-600 font-semibold">CHAT PREVIEW</p>
      <div className="overflow-y-auto py-2 h-40 md:h-80 rounded-sm chat">
      {responses.map(response => <p key={response.time} className="text-ellipsis justify-self-end px-4 py-2 ml-8 my-4 mr-4 rounded-md bg-green-200 text-sm font-medium text-gray-800 drop-shadow-md">
          {response.text}
        </p>)}
      </div>
    </div>
  )
}

export default Chat

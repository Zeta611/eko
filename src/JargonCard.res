open Jargon

type displayMode = DisplayEnglishAsPrimary /* | DisplayKoreanAsPrimary */

let reactListOfTranslations = translations => {
  <ol>
    {translations
    ->Js.Dict.entries
    ->Js.Array2.sortInPlaceWith(((k1, v1), (k2, v2)) => {
      if v2 - v1 != 0 {
        v2 - v1
      } else if k1 > k2 {
        1
      } else if k1 < k2 {
        -1
      } else {
        0
      }
    })
    ->Array.map(((k, _)) => <li key={k}> {k->React.string} </li>)
    ->React.array}
  </ol>
}

@react.component
let make = (~jargon as {id, english, translations}, ~axis) => {
  let translations = translations->reactListOfTranslations

  let displayMode = switch axis {
  | Chrono | English => DisplayEnglishAsPrimary
  // | Korean => DisplayKoreanAsPrimary
  }

  let (commentsCount, setCommentsCount) = React.Uncurried.useState(() => None)

  open Firebase
  let firestore = useFirestore()
  let jargonDoc = firestore->doc(~path=`jargons/${id}`)
  let {data: jargon} = jargonDoc->useFirestoreDocData

  // Only for getting the aggregated count of the votes
  let commentsCollection = firestore->collection(~path=`jargons/${id}/comments`)
  React.useEffect0(() => {
    let countComments = async (. ()) => {
      let snapshot = await getCountFromServer(commentsCollection)
      let count = snapshot.data(.).count
      setCommentsCount(._ => Some(count))
    }
    let _ = countComments(.)

    None
  })

  <div
    className="flex flex-col gap-y-2 group cursor-pointer p-4 bg-white hover:bg-teal-50 rounded-xl shadow-md dark:bg-zinc-900 dark:hover:bg-teal-900"
    onClick={_ => RescriptReactRouter.push(`/jargon/${id}`)}>
    // first row
    <div className="flex-none">
      {switch jargon {
      | Some({timestamp: Some(timestamp)}) =>
        <div className="text-xs dark:text-zinc-500">
          {`최근 활동 ${timestamp->Timestamp.toDate->DateFormat.timeAgo}`->React.string}
        </div>
      | _ => React.null
      }}
    </div>
    // second row
    <div className="flex-none inline-grid grid-cols-1">
      <div className="font-semibold group-hover:text-teal-700 dark:group-hover:text-teal-200">
        {{
          switch displayMode {
          // | DisplayKoreanAsPrimary => translations
          | DisplayEnglishAsPrimary => english
          }
        }->React.string}
      </div>
      <div
        className="overflow-hidden group-hover:overflow-visible whitespace-nowrap group-hover:whitespace-normal text-ellipsis font-regular text-zinc-500 group-hover:text-teal-600 dark:text-zinc-400 dark:group-hover:text-teal-300">
        {switch displayMode {
        // | DisplayKoreanAsPrimary => english
        | DisplayEnglishAsPrimary => translations
        }}
      </div>
    </div>
    // third row
    {switch commentsCount {
    | None => React.null
    | Some(count) =>
      <div className="flex-none text-xs dark:text-zinc-400">
        {j`댓글 $count개`->React.string}
      </div>
    }}
  </div>
}

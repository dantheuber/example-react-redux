export default function actionTypeConstructor (namespace) {
  return (actionType) => `${namespace}/${actionType}`;
}
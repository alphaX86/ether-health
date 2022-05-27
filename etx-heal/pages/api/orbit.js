const driver = require('bigchaindb-driver')

const alice = new driver.Ed25519Keypair()

const API = "https://test.ipdb.io/api/v1/"

const conn = new driver.Connection(API)

const tx = driver.Transaction.makeCreateTransaction(
  { message: 'Blockchain all the things!' },
  null,
  [ driver.Transaction.makeOutput(
      driver.Transaction.makeEd25519Condition(alice.publicKey))],
  alice.publicKey)
const txSigned = driver.Transaction.signTransaction(tx, alice.privateKey)
conn.postTransactionCommit(txSigned)

export function DBPost(t) {
  console.log("Public Key", alice.publicKey);
  const asset = t;
  const tx = driver.Transaction.makeCreateTransaction(
    asset,
    null,
    [ driver.Transaction.makeOutput(
        driver.Transaction.makeEd25519Condition(alice.publicKey))],
    alice.publicKey)
  const txSigned = driver.Transaction.signTransaction(tx, alice.privateKey)
  conn.postTransactionCommit(txSigned)
  return txSigned;
}

export function DBGet(t) {
  conn.searchAssets(t).then(assets => console.log("Found assets:", assets))
}
